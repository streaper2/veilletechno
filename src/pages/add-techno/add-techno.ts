import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Technology } from '../../models/technology';
import { DataService } from '../../providers/data/data.service';

@Component({
  selector: 'page-add-techno',
  templateUrl: 'add-techno.html',
})
export class AddTechnoPage {

  technology: Technology = {name:'', category:''};
  categories: string[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService) {
  }

  ionViewDidLoad() {
   this.categories = this.dataService.getAllCategories();
  }

  addTechnology(){
    this.dataService.addTechnology(this.technology);
    this.technology = { name: '', category: ''}
  }

}
