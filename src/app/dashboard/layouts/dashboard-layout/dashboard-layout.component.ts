import { Component, inject, computed } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent {
  private authServices = inject(AuthService);

  public user = computed(() => this.authServices.currentUser());

  /*  get user() {
    return this.authServices.currentUser();
  } */

  onLogout() {
    this.authServices.logout();
  }
}
