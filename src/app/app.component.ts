import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-angular';
  showDescription = false;
  catNames = [
    'Fluff',
    "Snowy",
    "Garfield"

  ]

  toggle(): void {
    this.showDescription = !this.showDescription
  }
}
