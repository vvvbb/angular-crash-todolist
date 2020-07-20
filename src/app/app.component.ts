import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Prenom';
}

export class Test {
  title: string = 'angular-crash-todolist';
  name: string = 'Vincent';

  constructor() {
    // console.log(123);
    // this.name = 'Ted';
    // this.changName('Léon');
  }

  changName(name: string) {
    this.name = name;
  }
}
