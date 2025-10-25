import { Component } from '@angular/core';
import { AuthService } from '../../_services/auth-service';

@Component({
  selector: 'app-main-layout',
  standalone: false,
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {
constructor(private authService: AuthService){}

getFullName(){
  let decodedToken = this.authService.decodeToken();

   return decodedToken.fullName;
}

loggedIn(){
  return this.authService.loggedIn();
}

}
