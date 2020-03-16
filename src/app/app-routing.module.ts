import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  {
    path: '',
    children: [
      // search module
      { path: 'search', loadChildren: './modules/search/search.module#SearchModule' },
      // single user module
      { path: 'user', loadChildren: './modules/user/user.module#UserModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { useHash: false, enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
