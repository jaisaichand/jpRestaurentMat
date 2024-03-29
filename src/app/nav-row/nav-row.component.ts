import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-row',
  templateUrl: './nav-row.component.html',
  styleUrls: ['./nav-row.component.scss']
})
export class NavRowComponent implements OnInit, OnDestroy {
  backclr = this.appService.bColor;
  textclr;
  subscription: Subscription;

  constructor(private appService: AppService) { }

  ngOnInit() {
   this.subscription = this.appService.clrObs.subscribe(
      (succ) => {
        this.backclr = succ.bClr;
        this.textclr = succ.tClr;
      }
    );
  }
  onLightMode() {
    this.appService.onLightMode();

   }
   onDarkMode() {
    this.appService.onDarkMode();
   }

   ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
