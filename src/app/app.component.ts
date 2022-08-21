import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    { title: 'Places', url: '/folder/Outbox', icon: 'heart' },
    { title: 'Hotels', url: '/folder/Favorites', icon: 'bed' },
    { title: 'Restaurants', url: '/folder/Archived', icon: 'pizza' },
    { title: 'Guides', url: '/folder/Trash', icon: 'person' },
    { title: 'Transport', url: '/folder/Spam', icon: 'car' },
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Customers', url: '/customers', icon: 'person' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
