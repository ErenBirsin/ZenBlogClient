import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient){ }

    baseUrl = "https://localhost:7000/api/users/login"

    login(model){
      return this.http.post<any>(this.baseUrl,model);
    }
}
