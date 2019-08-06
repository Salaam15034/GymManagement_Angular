import { Injectable,OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalContentService implements OnInit {

  public IsLoggedIn = new Subject();
  constructor() { }

  ngOnInit(){
    this.IsLoggedIn.next(true)
  }

}
