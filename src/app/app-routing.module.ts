import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FaqComponent } from './componentes/faq/faq.component';
import { MainComponent } from './componentes/main/main.component';
import { MoreCardsComponent } from './componentes/more-cards/more-cards.component';
import { RegisterComponent } from './componentes/register/register.component';
import { SellersComponent } from './componentes/sellers/sellers.component';
import { ShowsTableComponent } from './componentes/shows-table/shows-table.component';
import { TermsComponent } from './componentes/terms/terms.component';

const routes: Routes = [
  {path : 'main', component : MainComponent},
  {path : 'faq', component : FaqComponent},
  {path : 'contacto', component : ContactoComponent},
  {path : 'terms', component : TermsComponent},
  {path : 'about', component : AboutComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'more-cards', component : MoreCardsComponent},
  {path : 'sellers', component : SellersComponent},
  {path : 'shows', component : ShowsTableComponent},
  {path : '', pathMatch : 'prefix', redirectTo : 'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
