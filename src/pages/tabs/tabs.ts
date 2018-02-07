
import { Component } from '@angular/core';

import { AccueilPage } from '../accueil/accueil';
import { AddTechnoPage } from '../add-techno/add-techno';
import { SchedulePage } from '../schedule/schedule';
import { ScheduleListPage } from './../schedule-list/schedule-list';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccueilPage;
  tab2Root = AddTechnoPage;
  tab3Root = SchedulePage;
  tab4Root = ScheduleListPage

  constructor() {

  }
}
