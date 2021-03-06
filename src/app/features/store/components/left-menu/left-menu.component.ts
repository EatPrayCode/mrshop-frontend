import { organiserItemsConst } from 'src/app/mock-data/constants';
import { SidenavService } from './../../../../services/sidenav.service';
import { Component, OnInit } from '@angular/core';
import { onSideNavChange, animateText } from '../../animations/animations';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {

  public sideNavState: boolean = false;
  public linkText: boolean = false;
  complexLinks: any[] = organiserItemsConst;

  constructor(private _sidenavService: SidenavService) { }

  ngOnInit() { }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}