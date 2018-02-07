
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Schedule } from './../../models/schedules';
import { DataService } from '../../providers/data/data.service';


@Component({
  selector: 'page-schedule-list',
  templateUrl: 'schedule-list.html',
})
export class ScheduleListPage {

  schedules: Schedule[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataservice: DataService) {
  }

  ionViewWillEnter(){
    this.dataservice.getAllSchedules()
    .then(data => this.schedules = data);
  }

}
