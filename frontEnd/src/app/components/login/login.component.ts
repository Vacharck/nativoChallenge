import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  username = "admin";
  password = "nativo";
  usernameVal = "";
  passwordVal = "";
  validator = false;


  constructor() { }

  ngOnInit(): void {
  }

  searchUsername(usernameTemp:string) {
    console.log(usernameTemp)
    this.usernameVal = usernameTemp;
  }

  searchPassword(passwordTemp:string) {
    console.log(passwordTemp)
    this.passwordVal = passwordTemp
  }

  validateLogin(){
    if(this.usernameVal==this.username && this.passwordVal==this.password){
      this.validator = true;
      console.log(this.validator)
    }else{
      this.validator = false;
      console.log(this.validator)
    }
  }
}
