import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'coastline',
    loadChildren: () => import('./coastline/coastline.module').then(m => m.CoastlineModule)
  },
  {
    path: 'coastline-shop',
    loadChildren: () => import('./coastlineshop/coastlineshop.module').then(m=>m.CoastlineshopModule)
  },
  {
    path: '',
    redirectTo: 'coastline',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
