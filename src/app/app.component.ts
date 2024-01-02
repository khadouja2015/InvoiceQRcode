import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'QRCode', url: 'reconnaissance-text', icon: 'mail' },
    { title: 'hashage', url: 'code-hashe', icon: 'folder' },
    { title: 'liste code', url: 'liste', icon: 'heart' },
    { title: 'envoi QR code', url: 'post-qr', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
