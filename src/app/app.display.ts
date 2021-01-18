import { Component } from '@angular/core';

@Component ({
    selector: 'my-display',
    templateUrl: 'app.display.html'
})
export class appDisplay {
    name: string = "init";
    TutorialName: string = "Angular JS2";
    appList: string[] = ["Binding", "Dispaly", "Services"];
}