import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import {FlexLayoutModule} from '@angular/flex-layout';

import {MatMomentDateModule} from '@angular/material-moment-adapter';

const modules = [
  FlexLayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatDividerModule,
  MatSortModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSliderModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
