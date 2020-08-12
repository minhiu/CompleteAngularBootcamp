import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    navbarCollapsed: Boolean = true;
 
  onToggleNavbarCollapsed(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
 }

