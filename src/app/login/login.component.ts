import { Component, OnInit } from '@angular/core';
import {Router, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public name: string = '';
  public password: string = '';

  public ketObject = {
    name: 'test',
    password: 'test',
  }

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  public login(): void {
    if(this.ketObject.name === this.name && this.ketObject.password === this.password){
      localStorage.setItem('token','test_token') // для guard
      this.name = ''; // Чтобы значение обнулялось
      this.password = '';
      this.router.navigate(['dashboard'])
    }
  }

}
