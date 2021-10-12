import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  selectedNavLink: any = 'home';

  ngOnInit() { }

  toggleMenu(e: any) {
    console.log("menu works");
  }

  handleNavLinks(navLink: any) {
    this.selectedNavLink = navLink;
  }

}
