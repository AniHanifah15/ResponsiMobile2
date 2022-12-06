import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Note', url: '/note', icon: 'mail' },
    { title: 'Tambah Note', url: '/note_tambah', icon: 'cube' },
  ];
  constructor() { }
}