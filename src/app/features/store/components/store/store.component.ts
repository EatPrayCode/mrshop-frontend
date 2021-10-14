import { ViewEditPackComponent } from './../../../checkout/components/customise-pack/components/view-edit-pack/view-edit-pack.component';
import { SidenavService } from './../../../../services/sidenav.service';
import { FiltersComponent } from '../filters/filters.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { ChooseCategoriesComponent } from '../choose-categories/choose-categories.component';
import { onSideNavChange, animateText, onMainContentChange } from '../../animations/animations';
import { of } from 'rxjs';
import { categoriesNavItems } from 'src/app/mock-data/app.models';
import { categoriesNavItemsConst } from 'src/app/mock-data/constants';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  animations: [onSideNavChange, animateText, onMainContentChange]
})
export class StoreComponent implements OnInit {

  public onSideNavChange: boolean = false;
  public sortings = ['Sort by Default', 'Best match', 'Lowest first', 'Highest first'];
  public sort: any;

  rightList: any = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},];
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

  constructor(
    private _sidenavService: SidenavService,
    private observer: BreakpointObserver,
    public dialog: MatDialog,
  ) {
    this._sidenavService.sideNavState$.subscribe(res => {
      this.onSideNavChange = res;
    })
  }

  ngOnInit(): void {
    this.sort = this.sortings[0];
    this.initialisePage('housekeeping');
  }

  public changeSorting(sort: any) {
    this.sort = sort;
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {

        } else {

        }
      });
  }

  gotoPacks() {

  }

  gotoServices() {

  }

  openPackSummaryDialog(pack: any): void {
    let dialogRef = this.dialog.open(FiltersComponent, {
      hasBackdrop: true,
      disableClose: false,
      height: '100vh',
      minWidth: '50%',
      position: {
        right: '0px',
        bottom: '0px',
      },
      data: {
        pack: pack
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openFiltersDialog(): void {
    let dialogRef = this.dialog.open(FiltersComponent, {
      hasBackdrop: true,
      disableClose: false,
      height: '100vh',
      minWidth: '90%',
      position: {
        right: '0px',
        bottom: '0px',
      },
      data: {
        // pack: pack
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
