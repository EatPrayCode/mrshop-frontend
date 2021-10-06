import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: false,
  suppressScrollX: true
};

import { AgmCoreModule } from '@agm/core';

import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { AppSpinnerDirective } from './directives/app-spinner';
import { SpinnerComponent } from './directives/spinner/spinner.component';
import { AppMaterialModule } from './material.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { LogoComponent } from './components/logo/logo.component';
import { MissionComponent } from './components/mission/mission.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    AgmCoreModule,
    AppMaterialModule,
  ],
  declarations: [
    LogoComponent,
    GetInTouchComponent,
    MissionComponent,
    ConfirmDialogComponent,
    AlertDialogComponent,
    SpinnerComponent,
    AppSpinnerDirective,
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    TranslateModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    AgmCoreModule,
    LogoComponent,
    GetInTouchComponent,
    MissionComponent,
    ConfirmDialogComponent,
    AlertDialogComponent,
    AppMaterialModule,
    SpinnerComponent,
    AppSpinnerDirective,
  
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
})
export class SharedModule { }
