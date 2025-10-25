import { Component } from '@angular/core';
import { AuthService } from '../../_services/auth-service';

@Component({
  selector: 'admin-layout',
  standalone: false,
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css'
})
export class AdminLayout {

constructor(private authService: AuthService){}

getUserName(){
  let decodeTdoken = this.authService.decodeToken()
  return decodeTdoken.name
}

logout(){
this.authService.logout();
}


}
