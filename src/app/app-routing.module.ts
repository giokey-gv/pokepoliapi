import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './shared/body/body.component';
import { CardComponent } from './shared/card/card.component';


const routes: Routes = [
  {path: 'home', component: BodyComponent},
  {path: 'card/:id', component: CardComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
