import { Component } from '@angular/core';
import { Site } from './site';

@Component({
    moduleId: module.id,
    selector: 'site-form',
    templateUrl: 'site-form.component.html'
})
export class SiteFormComponent{
    urls = ['www.yahoo.com','www.google.com','www.apple.com','www.facebook.com'];
    model = new Site(1,'Yahoo',this.urls[0], 10000);
    submitted = false;
    onSubmit() { this.submitted = true; }
    get diagnostic() { return JSON.stringify(this.model); }
}