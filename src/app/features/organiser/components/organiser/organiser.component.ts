import { packSample } from '../../../../mock-data/constants';
import { ChoosOrganiserCategoriesComponent } from '../choose-organiser-categories/choose-organiser-categories.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { SidenavService } from '../../sidenav.service';
import { onSideNavChange, animateText, onMainContentChange } from '../../animations/animations';
import { AppService } from 'src/app/app/app.service';

@Component({
  selector: 'app-organiser',
  templateUrl: './organiser.component.html',
  styleUrls: ['./organiser.component.scss'],
  animations: [onSideNavChange, animateText, onMainContentChange]
})
export class OrganiserComponent implements OnInit {

  public onSideNavChange: boolean = false;

  constructor(
    private _sidenavService: SidenavService,
    private observer: BreakpointObserver,
    public dialog: MatDialog,
    public appService: AppService
  ) {
    this._sidenavService.sideNavState$.subscribe(res => {
      this.onSideNavChange = res;
    });
  }

  ngOnInit(): void {
  }

  handleAddTaskToList(event: any) {
    const pack = packSample;
    this.appService.addSampleToCart(pack);
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
    let dialogRef = this.dialog.open(ChoosOrganiserCategoriesComponent, {
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

}
