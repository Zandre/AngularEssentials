import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Essentials (with Typescript)';
  rootName = 'Zandre Botha';
  rootItems = ['Apples', 'Bananas', 'Cherries'];

  onNameChanged(newName) {
    this.rootName = newName;
  }

  onItemWasAdded(newItem){
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }
}
