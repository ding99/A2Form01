import { Component } from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  template: `
    <h2 style="color: red">Layer 2: Component</h2>
    <site-form>Loading site-form ...</site-form>
    <ul>
      <li><a [routerLink] = "['/Product1']">Product</a></li>
      <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
    </ul>
    <router-outlet></router-outlet>
    <br>
    <div>{{value}}</div>
    <my-display>Loading Display... </my-display>
  `
})
export class AppComponent {
  value: string = "Empty";
  constructor(private _appService: appService) { }
  ngOnInit(): void {
    this.value = this._appService.getApp();
  }
}
