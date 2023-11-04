import { Component, Input, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  loading: boolean = false;
  constructor(private _appService: AppService) { }

  async register(name: string, job: string) {
    this.loading = true;
    const registerResponse: boolean = await this._appService.registration(name, job);
    this.loading = false;
    registerResponse ? alert('Success') : alert('Failed');
  }
}
