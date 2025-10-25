import { Component } from '@angular/core';
import { AuthService } from '../../_services/auth-service';
import { LoginDto } from '../../_models/loginDto';
declare const alertify:any;

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
constructor(private authService:AuthService){}

loginDto:LoginDto = new LoginDto()
token:any;

login(){
this.authService.login(this.loginDto).subscribe({
  next:result=>{this.token=result.data.token
    alertify.success("Login Succesfull!")
  },
  error: result => {
    console.log(result.error.errors);
    alertify.error("Login Failed")
  }
})
}
}
