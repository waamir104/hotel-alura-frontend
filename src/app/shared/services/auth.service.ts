import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/core/domain/app-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly serverUrl: string = AppConstants.API_SERVER_HOST;

  constructor(private http: HttpClient) { }

  register(): any {
    
  }
}

