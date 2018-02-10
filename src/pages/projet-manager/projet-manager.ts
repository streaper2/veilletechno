import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Projet } from '../../models/projets';

@Component({
  selector: 'page-projet-manager',
  templateUrl: 'projet-manager.html',
})
export class ProjetManagerPage {

  projet: Projet[] ;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projet = navParams.get('projet');
    console.log(this.projet)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjetManagerPage');
  }
  
}
