import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Technology } from '../../models/technology';
import { DataService } from '../../providers/data/data.service';

@Component({
  selector: 'page-add-techno',
  templateUrl: 'add-techno.html',
})
export class AddTechnoPage {

  technology: Technology ;
  categories: string[];
  modify: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService) {
   

    if ((navParams.get('technology')) == null){
      this.technology = {name:'', category:''};
      this.modify = false;
    }
    else{
      this.technology = navParams.get('technology');
      this.modify = true;
      console.log(navParams.get('technology'))
    }

  }

  ionViewDidLoad() {
  
   this.categories = this.dataService.getAllCategories();
  }

  addTechnology(){
    this.dataService.addTechnology(this.technology);
    this.technology = { name: '', category: ''};
    this.navCtrl.pop();
  }

  updateTechnology(){
    this.dataService.updateTechnology(this.technology);
    this.technology = { name: '', category: ''};
    this.navCtrl.pop();
  }

}
