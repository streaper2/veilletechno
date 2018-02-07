

import { SchedulePage } from './../../pages/schedule/schedule';
//import { Http } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Technology } from '../../models/technology';
import { Schedule } from '../../models/schedules';
import Dexie from 'dexie';


@Injectable()
export class DataService {

  db;
  categories: string[] = ['front','back','fullStack','Hybride','Autre'];
  priorities: string[] = ['basse', 'moyenne', 'haute'];

  constructor() {
    this.db = new Dexie('veilletechno');
    this.db.version(1).stores({
      schedules:'++id, name',
      technologies:'++id'
    })
  }

  // technologies: Technology[] = [
  //   {name: 'Angular', category:'front'},
  //   {name: 'PWA', category:'Hybride'},
  //   {name: 'javascript', category:'front'},
  //   {name: 'node.js', category:'backend'},
  //   {name: 'mongodb', category:'backend'},
  //   {name: 'ionic', category:'hybrid'}
  // ];
  technologies: Technology[];

  schedules: Schedule[] = [];


  getAllTechnologies(): Dexie.Promise<Technology[]> {
    //return this.technologies;
    return this.db.technologies
              .toArray();
  }

  getAllCategories(){
    return this.categories;
  }
  
  search(term: string){
    return this.technologies.filter(tech => tech.name.toLocaleLowerCase().includes(term));
  }

  addTechnology(technology: Technology){
    //this.technologies= [...this.technologies, Technology]
   
    //console.log(this.technologies)

    this.db.technologies.add(technology);
  }

  getAllPriorities(){
    return this.priorities;
  }

  createSchedule(schedule: Schedule){
    // this.schedules = [...this.schedules, schedule]
    // console.log(this.schedules)

    this.db.schedules.add(schedule)
  }

  getAllSchedules():Dexie.Promise<Schedule[]>{
    return this.db.schedules.toArray();
  }
}
