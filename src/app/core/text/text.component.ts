import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {MaalfridService} from '../maalfrid-service/maalfrid.service';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent {

  displayedColumns = ['code', 'count'];

  @Input()
  text: string;

  nominations: any[] = [];

  constructor(private maalfridService: MaalfridService, private changeDetectorRef: ChangeDetectorRef) { }

  onIdentifyLanguage(text) {
    if (text) {
      this.maalfridService.identifyLanguage(text)
        .pipe(
          map((reply) => reply['value'] || []),
          map((values) => values.map((value) => ({code: value.code, count: value.count.toPrecision(4)})))
        )
        .subscribe((nominations) => {
          this.nominations = nominations;
          this.changeDetectorRef.markForCheck();
        });
    }
  }
}
