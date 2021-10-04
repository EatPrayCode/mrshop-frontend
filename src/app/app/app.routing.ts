
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../common/components/not-found/not-found.component';
import { BlankComponent } from '../layouts/blank/blank.component';
import { PagesComponent } from '../layouts/pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    // component: KitchensinkComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./../features/landing/landing.module').then(m => m.LandingModule)
      },
    ]
  },

  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'about', loadChildren: () => import('./../features/about/about.module').then(m => m.AboutModule) },
      { path: 'checkout', loadChildren: () => import('./../features/checkout/checkout.module').then(m => m.CheckoutModule) },
      { path: 'cart', loadChildren: () => import('./../features/cart/cart.module').then(m => m.CartModule) },
      { path: 'organiser', loadChildren: () => import('./../features/organiser/organiser.module').then(m => m.OrganiserModule) },
      {
        path: 'rewards', loadChildren: () => import('./../features/rewards/rewards.module').then(m => m.RewardsModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./../features/home/home.module').then(m => m.HomeModule)
      },
      // {
      //   path: 'admin',
      //   loadChildren: () => import('./../features/admin/admin.module').then(m => m.AdminModule)
      // },
      {
        path: 'store',
        loadChildren: () => import('./../features/store/store.module').then((m) => m.StoreModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./../features/store/store.module').then((m) => m.StoreModule),
      }
    ]
  },

  {
    path: '**',
    component: NotFoundComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
