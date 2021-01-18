import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SiteFormComponent } from './site-form.component';
import { Appproduct } from './product.component';
import { AppInventory } from './Inventory.component';

const appRoutes: Routes = [
  {path: 'Product', component: Appproduct },
  {path: 'Inventory', component: AppInventory },
];

@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,SiteFormComponent,Appproduct,AppInventory ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
