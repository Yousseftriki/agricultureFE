import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './routes';
import { ProduitService } from './produit.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes),
    HttpClientModule
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }




