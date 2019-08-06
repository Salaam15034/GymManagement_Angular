import { Component,OnInit } from '@angular/core';
import {GlobalContentService} from 'src/app/services/global-content-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Gym Management System';
  isLogggedIn:boolean = false;
  constructor(private globalService : GlobalContentService){

  }

  ngOnInit(){
  this.globalService.IsLoggedIn.subscribe(item => this.isLogggedIn = (item = true));
}

}
