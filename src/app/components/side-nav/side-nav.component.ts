import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  isProjectsExpanded = false;
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  toggleProjectsMenu(): void {
    this.isProjectsExpanded = !this.isProjectsExpanded;
  }

  setActiveRoute(route: string): void {
    this.currentRoute = route;
  }
}
