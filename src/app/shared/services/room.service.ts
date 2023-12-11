import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core/domain/page';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private readonly serverUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  rooms$ = (page: number = 0, size: number = 10): Observable<Page> =>
    this.http.get<any>(`${this.serverUrl}/api/v1/room/list?size=${size}&page=${page}`);
}
