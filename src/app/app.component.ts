
import { Component, ViewChild  } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { MenuController } from 'ionic-angular';
import { AccueilPage } from '../pages/accueil/accueil';
import { AddTechnoPage } from '../pages/add-techno/add-techno';
import { TechnologiesPage } from '../pages/technologies/technologies';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = AccueilPage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public menuCtrl: MenuController,
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    
    });

    this.pages = [
      { title: 'Projets', component: AccueilPage  },
      { title: 'Compétences', component: TechnologiesPage }
    ];

    
  }

  openMenu() {
    this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }
 
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
