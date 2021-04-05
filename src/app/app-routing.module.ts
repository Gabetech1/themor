import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AttorneysComponent } from './pages/attorneys/attorneys.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { PracticeAreasComponent } from './pages/practice-areas/practice-areas.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'practice-areas', component: PracticeAreasComponent},
  {path: 'attorneys', component: AttorneysComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
