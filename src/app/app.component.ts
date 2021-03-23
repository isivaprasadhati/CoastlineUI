import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnInit } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { CoastlineService } from './core/coastline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Coastline';
  mobileQuery: MediaQueryList;
  featureCategory: any = [];
  fillerNav: any = [];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private coastlineSrvs: CoastlineService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change", () => {
      this._mobileQueryListener
    })
  }
  ngOnInit(): void {
    this.coastlineSrvs.getFeatureCategory().subscribe((res: any) => {
      this.featureCategory = res;
    })
  }

  getFeatures(value: any) {
    this.coastlineSrvs.getFeaturesByCategory(value).subscribe((res: any) => {
      this.fillerNav = res;
    })
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("change", () => {
      this._mobileQueryListener
    })
  }
}
