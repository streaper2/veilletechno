
import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';

import { Schedule } from '../../models/schedules';
import { Technology } from '../../models/technology';
import { DataService } from '../../providers/data/data.service';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  schedule: Schedule = {
    name: '',
    date: null,
    duration: 0,
    priority: '',
    remark: '',
    technology: { name: '', category: ''}
  }; 
  technologies: Technology[];
  categories: string[];
  priorities: string[];


  constructor(public navCtrl: NavController, private dataService: DataService, private toastCtrl: ToastController) {

  }

  ionViewWillEnter() {
    //this.technologies = this.dataService.getAllTechnologies();
    this.dataService.getAllTechnologies()
      .then(data => this.technologies = data);

    this.categories = this.dataService.getAllCategories();
    this.priorities = this.dataService.getAllPriorities();
  }

  createSchedule() {
    this.dataService.createSchedule(this.schedule);
    this.toastCtrl.create({
      message: 'votre tâche a été crée',
      duration: 2000,
      cssClass:'ok'
    }).present();

    this.resetSchedule();
  }

  resetSchedule() {
      this.schedule =  {
        name: '',
        date: null,
        duration: 0,
        priority: '',
        remark: '',
        technology: { name: '', category: ''}
    }
  }

}