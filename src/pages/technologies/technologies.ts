
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';


import { DataService } from './../../providers/data/data.service';
import { Technology } from '../../models/technology';

import { AddTechnoPage } from './../add-techno/add-techno';
import { Projet } from '../../models/projet';
import { ProjetManagerPage } from '../projet-manager/projet-manager';
import { TabsPage } from '../tabs/tabs';
import { ViewController } from 'ionic-angular/navigation/view-controller';




@Component({
  selector: 'page-technologies',
  templateUrl: 'technologies.html',
})
export class TechnologiesPage {


  technologies: Technology[];

 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private dataService: DataService,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private viewCtrl: ViewController) {
  }

  ionViewWillEnter(){
  
    this.dataService.getAllTechnologies().then(data => this.technologies = data );
  }

  addTechno(){
    this.navCtrl.push(AddTechnoPage);
  }

  deleteTechnology(t, index){
    let deleted  = [];
     for(let i=0; i < this.technologies.length; i++){
       if (this.technologies[i].id == t.id){
         deleted = this.technologies.splice(i,1);
        }
        
      }

      this.dataService.deleteTechnology(t)

      console.log(deleted);
      this.toastDelete(deleted[0].name);
      
  }

  modifyTechno(t: Technology){
    this.navCtrl.push(AddTechnoPage,{technology: t});
  }

  toastDelete(item) {
    let toast = this.toastCtrl.create({
      message: 'la techno ' + item + ' a été supprimé :)',
      duration: 2000,
      position: 'bottom',
      showCloseButton: true
    }).present()
  }
}
