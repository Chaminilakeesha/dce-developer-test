import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  loading: boolean = false;
  id: number = 0;
  constructor(private _appService: AppService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id']
  }

  async updateUser(name: string, job: string) {
    this.loading = true;
    const updateResponse: boolean = await this._appService.updateUser(this.id, name, job)
    this.loading = false;
    updateResponse ? alert('Success') : alert('Failed')
  }
}
