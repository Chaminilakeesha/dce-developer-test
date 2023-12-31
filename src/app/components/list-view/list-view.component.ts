import { Component, OnInit } from '@angular/core';
import { AppService, IUser } from 'src/app/app.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  page: number = 1;
  userList: IUser[] = [];
  selectedId: number = 0;
  loading: boolean = false;
  deleteResponse: boolean = false;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.viewAllUsers(this.page).then(value => this.userList = value);
  }

  paginate(page: number) {
    this._appService.viewAllUsers(page).then(value => this.userList = value);
  }

  setUserId(id: number) {
    this.selectedId = id;
  }

  async deleteUser() {
    this.loading = true;
    const deleteResponse: boolean = await this._appService.deleteUser(this.selectedId);
    this.loading = false;
    this.deleteResponse = deleteResponse;
  }
}
