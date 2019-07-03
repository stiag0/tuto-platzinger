import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  friends: User[];
  
  constructor(private userService) { 
    this.friends = userService.getFriends();
  
  }

  ngOnInit() {
  }

}
