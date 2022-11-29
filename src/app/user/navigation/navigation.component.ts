import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})



export class NavigationComponent implements OnInit {
  constructor() { }
  activeMenu:boolean = false;
  change_icon:boolean = false;
  burgerMenu(){
    this.activeMenu = ! this.activeMenu;
    this.change_icon = ! this.change_icon;
  }

  ngOnInit(): void {
  }
}
