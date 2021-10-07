import { Component, Inject, OnInit, PLATFORM_ID, ViewChild, OnChanges, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

import { isPlatformBrowser } from '@angular/common';
import { Pagination, Property } from 'src/app/mock-data/app.models';
import { AppSettings, Settings } from 'src/app/app/app.settings';
import { AppService } from 'src/app/app/app.service';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.scss']
})
export class PacksComponent implements OnInit, OnChanges {

  @ViewChild('sidenav') sidenav: any;
  public allPacks: any[] = [];
  public viewType: string = 'grid';
  public viewCol: number = 33.3;
  public count: number = 12;
  public sort: string = '';
  public searchFields: any;
  public removedSearchField: string = '';
  public message: string = '';

  public settings: Settings;

  @Input() inputData: any = [];
  @Output() packChange = new EventEmitter();

  packsLoaded: any = false;

  constructor(
    public appSettings: AppSettings,
    public appService: AppService,
    public mediaObserver: MediaObserver,
    @Inject(PLATFORM_ID) private platformId: Object) {
    this.settings = this.appSettings.settings;
  }

  ngOnChanges(changeRecord: SimpleChanges) {
    const record = changeRecord.inputData;
    const inputData = record.currentValue || '';
    if (this.inputData) {
      this.inputData = inputData;
      console.log(this.inputData);
      this.packsLoaded = true;
    }
  }

  ngOnInit() {
    this.getProperties();
  }

  ngOnDestroy() { }

  public onSubmit(): void {
  }

  public getProperties() {
    this.appService.getProperties().subscribe((data: any) => {
      // let result = this.filterData(data); 
      console.log(data);
      let result = {
        data: data,
        pagination: new Pagination(1, this.count, 0, 2, 0, 0)
      };
      this.allPacks = result.data;
    })
  }

  public searchClicked() {
    this.allPacks.length = 0;
    this.getProperties();
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  addToCart(e: any) {
    this.appService.addMockToCart();
    // e.stopPropagation();
    // return
  }

}
