import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FaqComponent } from './componentes/faq/faq.component';
import { AboutComponent } from './componentes/about/about.component';
import { TermsComponent } from './componentes/terms/terms.component';
import { MoreCardsComponent } from './componentes/more-cards/more-cards.component';
import { MainComponent } from './componentes/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellersComponent } from './componentes/sellers/sellers.component';

import {HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './componentes/register/register.component';
import { ShowsTableComponent } from './componentes/shows-table/shows-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CardsComponent,
    FooterComponent,
    ContactoComponent,
    FaqComponent,
    AboutComponent,
    TermsComponent,
    MoreCardsComponent,
    MainComponent,
    SellersComponent,
    RegisterComponent,
    ShowsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
