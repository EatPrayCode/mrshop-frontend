import { DefaultComponent } from './default/default.component';
import { CheckoutModule } from './../features/checkout/checkout.module';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { AuthModule } from '../core/auth/auth.module';

import { PagesComponent } from './pages/pages.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FullScreenComponent } from './components/fullscreen/fullscreen.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { CustomisePackModule } from '../features/checkout/components/customise-pack/customise-pack.module';
import { CoreModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    PagesComponent,
    MenuComponent,
    UserMenuComponent,
    FullScreenComponent,
    BreadcrumbComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    CoreModule,
    CustomisePackModule,
    CheckoutModule
  ],
  exports: [
    PagesComponent,
    MenuComponent,
    UserMenuComponent,
    FullScreenComponent,
    BreadcrumbComponent,
    DefaultComponent
  ]
})
export class LayoutsModule { }
