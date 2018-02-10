import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  

 
  constructor(public navCtrl: NavController) { }
 
 

 
}