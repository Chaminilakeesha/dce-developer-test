import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  // loading: boolean = false;
  // id: number = 0;
  // constructor(private _appService: AppService, private _route: ActivatedRoute) { }

  // ngOnInit() {
  //   this.id = this._route.snapshot.params['id']
  // }
  // async deleteUser() {
  //   this.loading = true;
  //   const deleteResponse: boolean = await this._appService.deleteUser(this.id);
  //   this.loading = false;
  //   deleteResponse ? alert('Success') : alert('Failed');
  // }
}
