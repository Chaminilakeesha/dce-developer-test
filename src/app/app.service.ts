import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

interface IRegisteredUser {
  name: string;
  job: string;
  id: string;
  createdAt: Date;
}

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface IViewAllUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
}

interface IUpdatedUser {
  name: string;
  job: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private _http: HttpClient) { }

  async registration(name: string, job: string): Promise<boolean> {
    try {
      const httpResult = await firstValueFrom<IRegisteredUser>(this._http.post<IRegisteredUser>('https://reqres.in/api/users', { name, job }));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async viewAllUsers(page: number): Promise<IUser[]> {
    try {
      const httpResult = await firstValueFrom<IViewAllUsers>(this._http.get<IViewAllUsers>(`https://reqres.in/api/users?page=${page}`));
      return httpResult.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async updateUser(id: number, name: string, job: string): Promise<boolean> {
    try {
      const httpResult = await firstValueFrom<IUpdatedUser>(this._http.put<IUpdatedUser>(`https://reqres.in/api/users/${id}`, { name, job }));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
