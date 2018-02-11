


import { Component } from '@angular/core';

import { AccueilPage } from '../accueil/accueil';
import { AddTechnoPage } from '../add-techno/add-techno';
import { SchedulePage } from '../schedule/schedule';
import { ScheduleListPage } from './../schedule-list/schedule-list';
import { ProjetManagerPage } from './../projet-manager/projet-manager';
import { NavParams } from 'ionic-angular';
import { Projet } from '../../models/projet';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  projet: Projet[] ;
  tab1Root = ProjetManagerPage;
  tab2Root = AddTechnoPage;
  tab3Root = SchedulePage;
  tab4Root = ScheduleListPage

  constructor(public navParams: NavParams) {
    this.projet = navParams.data;
    console.log(this.projet)
  }
}
