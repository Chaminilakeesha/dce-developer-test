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
  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.viewAllUsers(this.page).then(value => this.userList = value);
  }

  paginate(page: number) {
    this._appService.viewAllUsers(page).then(value => this.userList = value);
  }
}
