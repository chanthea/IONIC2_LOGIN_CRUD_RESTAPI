import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {MyService} from "../../providers/my-service/my-service";

@Component({
  templateUrl: 'build/pages/page1/page1.html',
  providers : [MyService]
})
export class Page1 {

  constructor(public navCtrl: NavController) {
  }
}
