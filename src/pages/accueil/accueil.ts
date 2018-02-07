
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';


import { DataService } from './../../providers/data/data.service';
import { Technology } from '../../models/technology';




@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  technologies: Technology[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private dataService: DataService,
              private loadingCtrl: LoadingController) {
  }
  ionViewWillEnter(){
    const loader = this.loadingCtrl.create({
      content: 'veuillez patienter'
    });
    loader.present();
    this.dataService.getAllTechnologies().then(data => this.technologies = data );
    loader.dismiss();
  }

  search(event){
    let val = event.target.value;
    if (val && val.trim() != '') {
      this.technologies = this.dataService.search(event.target.value);
    } else {
    //  this.technologies = this.dataService.getAllTechnologies();
    }
  }

}
