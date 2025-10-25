import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './_layouts/main-layout/main-layout';
import { Home } from './_main-components/home/home';
import { AdminLayout } from './_layouts/admin-layout/admin-layout';
import { Category } from './_admin-components/category/category';
import { Blog } from './_admin-components/blog/blog';
import { Login } from './_main-components/login/login';
import { AuthGuard } from './_guards/auth-guard';

const routes: Routes = [

//Main routes
{path:'',component: MainLayout,
  children:[
    {path:'',component:Home},
    {path:'login',component:Login}
  ]
},


//Admin Routes   https://localhost:4200/admin/category

{path : 'admin',
  component:AdminLayout,
  canActivate:[AuthGuard],
  children:[
    {path:'category',
      component:Category,
    canActivate:[AuthGuard]},
    {path:'blog'
      ,component:Blog,
    canActivate:[AuthGuard]}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
