import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2 style="color: red">Layer 2: Component</h2>
    <site-form>Loading site-form ...</site-form>
    <ul>
      <li><a [routerLink] = "['/Product']">Product</a></li>
      <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
