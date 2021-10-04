import { BlankComponent } from './layouts/blank/blank.component';
import { AppRoutingModule } from './app/app.routing';
import { LayoutsModule } from './layouts/layout.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, environment.url + '/assets/i18n/', '.json');
}

import { NotFoundComponent } from './common/components/not-found/not-found.component';
import { AppInterceptor } from './common/utils/app-interceptor';

import { AppSettings } from './app/app.settings';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    BlankComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    // LayoutsModule
  ],
  providers: [
    AppSettings,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
