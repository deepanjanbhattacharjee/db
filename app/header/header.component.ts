import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  home(){
    this.router.navigate(['/home']);
  }

  about(){
    this.router.navigate(['/about']);
  }

  login(){
    this.router.navigate(['/login']);
  }
}
