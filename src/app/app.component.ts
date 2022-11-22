import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.dark.css']
})
export class AppComponent{
  title = 'pokedex';
  filterName: string = ''
  darkToggle: boolean = false;

  darkLightMode(){
    this.darkToggle = !this.darkToggle;
  }

}
