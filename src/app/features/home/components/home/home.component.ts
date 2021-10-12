import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { categoriesNavItems } from 'src/app/mock-data/app.models';
import { categoriesNavItemsConst, organiserItemsConst } from 'src/app/mock-data/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rightList: any = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},];

  mainCategory: any = {}
  navItems: categoriesNavItems[] = [];

  initialisePage(categoryName: any) {
    this.loadCategories({}).subscribe(res => {
      this.navItems = res;
      const mainCategory_ = this.navItems.filter(ele => {
        return ele.route == categoryName;
      });
      this.rightList = mainCategory_[0].children;
      this.mainCategory = mainCategory_;
    });
  }

  ngOnInit(): void {
    this.initialisePage('housekeeping');
  }

  loadCategories(payload: any) {
    const obs$ = categoriesNavItemsConst;
    return of(obs$).pipe(delay(300));
  }

  selectMainCategory(item: any) {
    const category = item.route;
    this.mainCategory = {};
    const mainCategory_ = this.navItems.filter(ele => {
      return ele.route == category;
    });
    this.mainCategory = item;
    this.rightList = mainCategory_[0].children;
  }

}
