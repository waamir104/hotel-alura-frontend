import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core/domain/page';
import { AppConstants } from 'src/app/core/domain/app-constants';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private readonly serverUrl: string = AppConstants.API_SERVER_HOST;

  constructor(private http: HttpClient) { }

  rooms$ = (page: number = 0, size: number = 9): Observable<Page> =>
    this.http.get<any>(`${this.serverUrl}/api/v1/room/list?size=${size}&page=${page}`);
}
