import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BowlApiService } from '../bowl-api.service';


@Component({
  selector: 'app-bowl',
  templateUrl: './bowl.component.html',
  styleUrls: ['./bowl.component.css']
})
export class BowlComponent implements OnInit {

  @Input()
  public index!:number;

  public name?:string;

  public data?: number;

  public clicked:boolean = false;

  constructor(private bowlService : BowlApiService) {
    
   }

  ngOnInit(): void {
    if(this.index == 1) {
      this.name = "john";
    } else {
      this.name = "john2";
      this.data = this.bowlService.getData()
    }
  }

  public onMessage() : void {
    if(this.index == 1) {
      if(!this.clicked) {
        this.clicked = true;
      this.name = "sara";
      } else {

        this.clicked = false;
        this.name = "john"
      }
    } else {
      if(!this.clicked) {
        this.clicked = true;
        this.name = "sara2";
        } else {

        this.clicked = false;
          this.name = "john2"
        }
      }
  }
}
