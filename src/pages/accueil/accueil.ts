
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';


import { DataService } from './../../providers/data/data.service';
import { Technology } from '../../models/technology';

import { AddTechnoPage } from './../add-techno/add-techno';
import { Projet } from '../../models/projets';
import { ProjetManagerPage } from '../projet-manager/projet-manager';





@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  projets: Projet[];
  technologies: Technology[];

 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private dataService: DataService,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {
  }
  ionViewWillEnter(){
    const loader = this.loadingCtrl.create({
      content: 'veuillez patienter'
    });
    loader.present();
    loader.dismiss();
    this.projets = this.dataService.getAllProjets()
    this.dataService.getAllTechnologies().then(data => this.technologies = data );
  }

  search(ev:any){

    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.projets = this.projets.filter((Projet) => {
        return (Projet.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.projets = this.dataService.getAllProjets();
      //this.dataService.getall().then((data) => this.technologies = data);
    }
  }

  goProjet(p, i){
    this.navCtrl.push(ProjetManagerPage, {projet: p});
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
