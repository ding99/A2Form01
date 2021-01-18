import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SiteFormComponent } from './site-form.component';
import { Appproduct } from './product.component';
import { AppInventory } from './Inventory.component';
import { appService } from './app.service';
import { appDisplay } from './app.display';

const appRoutes: Routes = [
  {path: 'Product1', component: Appproduct },
  {path: 'Inventory', component: AppInventory },
];

@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,SiteFormComponent,Appproduct,AppInventory,appDisplay ],
  bootstrap: [ AppComponent ],
  providers: [appService]
})
export class AppModule { }
