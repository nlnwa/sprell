import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker/typings/datepicker-input';
import * as moment from 'moment';
import {Moment} from 'moment';

export class Interval {
  start: Moment;
  end: Moment;
}

@Component({
  selector: 'app-interval',
  template: `
    <style>
      section {
        height: 100%;
      }
    </style>
    <section fxLayout="column">
      <mat-toolbar class="app-toolbar" color="primary">
        <mat-icon class="icon-header">schedule</mat-icon>&nbsp;
        Intervall
      </mat-toolbar>
      <div fxLayout="column" class="app-container__padding">
        <mat-form-field>
          <input matInput
                 [ngModel]="interval.start"
                 [matDatepicker]="startTime"
                 placeholder="Start"
                 (dateChange)="onStartDateChange($event)">
          <mat-datepicker-toggle matSuffix [for]="startTime"></mat-datepicker-toggle>
        </mat-form-field>
        <mat-datepicker #startTime [startView]="startView"></mat-datepicker>
        <mat-form-field>
          <input matInput
                 [ngModel]="interval.end"
                 [matDatepicker]="endTimePicker"
                 placeholder="Slutt"
                 (dateChange)="onEndDateChange($event)">
          <mat-datepicker-toggle matSuffix [for]="endTimePicker"></mat-datepicker-toggle>
        </mat-form-field>
        <mat-datepicker #endTimePicker [startView]="startView"></mat-datepicker>

        <mat-form-field>
          <mat-select [value]="defaultUnit" (valueChange)="onGranularityChange($event)" placeholder="Granularitet">
            <mat-option *ngFor="let unit of units" [value]="unit">{{unitLanguageMap[unit] | titlecase}}</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntervalComponent implements OnInit {

  @Output()
  intervalSet = new EventEmitter<Interval>();

  @Output()
  granularity = new EventEmitter<string>();

  startView = 'year';

  interval: Interval = {
    start: moment().startOf('year'),
    end: moment().endOf('month'),
  };

  unitLanguageMap = {
    hour: 'time',
    day: 'dag',
    week: 'uke',
    month: 'måned',
    year: 'år',
  };

  defaultUnit = 'week';
  units = ['hour', 'day', 'week', 'month', 'year'];

  ngOnInit(): void {
    this.intervalSet.emit(this.interval);
    this.granularity.emit(this.defaultUnit);
  }

  onGranularityChange(event: string) {
    this.granularity.emit(event);
  }

  onStartDateChange(event: MatDatepickerInputEvent<Moment>) {
    this.interval.start = event.value;
    this.intervalSet.emit(this.interval);
  }

  onEndDateChange(event: MatDatepickerInputEvent<Moment>) {
    this.interval.end = event.value;
    this.intervalSet.emit(this.interval);
  }
}
