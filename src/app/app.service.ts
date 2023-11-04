import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

interface IRegisteredUserResponse {
  name: string;
  job: string;
  id: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {


  constructor(private _http: HttpClient) { }

  async registration(name: string, job: string): Promise<boolean> {
    try {
      const httpResult = await firstValueFrom<IRegisteredUserResponse>(this._http.post<IRegisteredUserResponse>('https://reqres.in/api/users', { name, job }));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }

  }
}
