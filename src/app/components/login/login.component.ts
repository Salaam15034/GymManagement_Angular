import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import {Router } from '@angular/router'
import { GlobalContentService } from 'src/app/services/global-content-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private globalService : GlobalContentService, private router : Router) { }

  ngOnInit() {
  }

  login(username,password){
    console.log(username,password);
    this.globalService.IsLoggedIn.next(true);
    this.router.navigate(['/home']);
  }



}
