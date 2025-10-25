import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient

  ){ }

    baseUrl = "https://localhost:7000/api/users/login"
    decodedToken:any;
    jwtHelper = new JwtHelperService()

    login(model){
      return this.http.post<any>(this.baseUrl,model);
    }

    decodeToken(){
      let token = localStorage.getItem("token");
      this.decodedToken=this.jwtHelper.decodeToken(token);
      return this.decodedToken;

    }

    loggedIn(){
      const token = localStorage.getItem("token");
      return !this.jwtHelper.isTokenExpired(token);
}
}
