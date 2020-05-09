import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [

  {
path: '',
component: HomeComponent

  },
  {
    path: 'navbar',
    component: NavbarComponent
    
      },
  {
path: 'footer',
component:FooterComponent

  },
  {
    path: 'login',
    component:LoginComponent
      },
      
          {
            path: 'register',
            component:RegisterComponent
              },

              {
                path: '',
                component:LoginComponent
                  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
