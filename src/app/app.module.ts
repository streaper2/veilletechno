


import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AccueilPage } from '../pages/accueil/accueil';
import { AddTechnoPage } from '../pages/add-techno/add-techno';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleListPage } from './../pages/schedule-list/schedule-list';

import { DataService } from '../providers/data/data.service';
import { ProjetManagerPage } from '../pages/projet-manager/projet-manager';
import { MenuPage } from './../pages/menu/menu';
import { AddProjetPage } from '../pages/add-projet/add-projet';
import { TechnologiesPage } from '../pages/technologies/technologies';




@NgModule({
  declarations: [
    MyApp,
    AccueilPage,
    AddTechnoPage,
    SchedulePage,
    ScheduleListPage,
    ProjetManagerPage,
    MenuPage,
    TabsPage,
    AddProjetPage,
    TechnologiesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccueilPage,
    AddTechnoPage,
    SchedulePage,
    ScheduleListPage,
    ProjetManagerPage,
    MenuPage,
    TabsPage,
    AddProjetPage,
    TechnologiesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService
  ]
})
export class AppModule {}
