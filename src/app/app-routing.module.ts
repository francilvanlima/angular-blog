import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoticiaCompletaComponent } from './components/noticia-completa/noticia-completa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'noticia/:id', component: NoticiaCompletaComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
