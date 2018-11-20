import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {combineLatest, of, Subject} from 'rxjs';
import {catchError, filter, map, share, switchMap, tap} from 'rxjs/operators';

import {MaalfridService} from '../../services/maalfrid-service/maalfrid.service';
import {Entity, Seed} from '../../models/config.model';
import {Interval} from '../../components/interval/interval.component';
import {AggregateText, Filter, FilterSet} from '../../models/maalfrid.model';
import {dominate, predicateFromFilters} from '../../func/filter';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent implements OnInit {
  private entities = new Subject<Entity[]>();
  entities$ = this.entities.asObservable();

  private seeds = new Subject<Seed[]>();
  seeds$ = this.seeds.asObservable();

  granularity = new Subject<string>();
  granularity$ = this.granularity.asObservable();

  interval = new Subject<Interval>();
  interval$ = this.interval.asObservable();

  selectedEntity = new Subject<Entity>();
  selectedEntity$ = this.selectedEntity.asObservable().pipe(
  );

  selectedSeed = new Subject<Seed>();
  selectedSeed$ = this.selectedSeed.asObservable().pipe(
    tap((seed) => this.maalfridService.getFilterSets(seed).subscribe((filterSets) => this.filterSets.next(filterSets))),
    share()
  );

  private text = new Subject<string>();
  text$ = this.text.asObservable();

  loading = new Subject<boolean>();
  loading$ = this.loading.asObservable();

  globalFilters = new Subject<Filter[]>();
  globalFilters$ = this.globalFilters.asObservable();

  seedFilters = new Subject<Filter[]>();
  seedFilters$ = this.seedFilters.asObservable();

  immediateFilters = new Subject<Filter[]>();
  immediateFilters$ = this.immediateFilters.asObservable();

  private globalFilterSet = new Subject<FilterSet>();
  globalFilterSet$ = this.globalFilterSet.asObservable();

  filterSet = new Subject<FilterSet>();
  filterSet$ = this.filterSet.asObservable();

  private filterSets = new Subject<FilterSet[]>();
  filterSets$ = this.filterSets.asObservable();

  filters$ = combineLatest(this.globalFilters$, this.seedFilters$, this.immediateFilters$).pipe(
    map(([globalFilters, seedFilters, immediateFilters]) => [...globalFilters, ...seedFilters, ...immediateFilters])
  );

  data = new Subject<AggregateText[]>();
  data$ = this.data.asObservable().pipe(
    tap(() => console.log('new data')),
  );

  filteredData = new Subject<AggregateText[]>();
  filteredData$ = this.filteredData.asObservable().pipe(share());

  domain$ = this.data$.pipe(map((data) => dominate(data)));

  constructor(private maalfridService: MaalfridService, private cdr: ChangeDetectorRef) {
    this.selectedEntity$.pipe(switchMap((entity) => this.maalfridService.getSeeds(entity)))
      .subscribe(seeds => this.seeds.next(seeds));

    combineLatest(this.data$, this.filters$).pipe(
      map(([data, filters]) => data.filter(predicateFromFilters(filters))),
    ).subscribe((data) => {
      // must schedule the update in a microtask (or macrotask with setTimeout)
      // or else the change is not always detected by angular
      Promise.resolve().then(() => this.filteredData.next(data));
    });

    combineLatest(this.selectedSeed$, this.interval$).pipe(
      filter(([seed, _]) => !!seed),
      tap(() => this.loading.next(true)),
      switchMap(([seed, interval]) => this.maalfridService.getExecutions(seed, interval)),
      tap(() => this.loading.next(false)),
    ).subscribe((data) => {
      this.data.next(data);
    });

    // reset when no seed is selected
    this.selectedSeed$.pipe(
      filter((seed) => !seed)
    ).subscribe(_ => {
      this.data.next([]);
    });
  }

  ngOnInit(): void {
    this.loadEntities();
    this.loadGlobalFilter();
  }

  onFilterSave(filterSet: FilterSet) {
    this.maalfridService.saveFilter(filterSet).subscribe();
  }

  onRequestText(warcId: string) {
    this.maalfridService.getText(warcId)
      .pipe(
        catchError(() => of(''))
      )
      .subscribe(_ => this.text.next(_));
  }

  private loadGlobalFilter(): void {
    this.maalfridService.getFilterById('global').subscribe(_ => this.globalFilterSet.next(_));
  }

  private loadEntities(): void {
    this.maalfridService.getEntities().subscribe(entities => {
      this.entities.next(entities);
    });
  }
}
