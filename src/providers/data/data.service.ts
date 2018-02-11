import { SchedulePage } from './../../pages/schedule/schedule';
//import { Http } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Technology } from '../../models/technology';
import { Schedule } from '../../models/schedules';
import Dexie from 'dexie';
import { Projet } from '../../models/projet';


@Injectable()
export class DataService {

  db;
 
  categories: string[] = ['front','back','fullStack','Hybride','Autre'];
  priorities: string[] = ['basse', 'moyenne', 'haute'];
  technologies: Technology[];
  schedules: Schedule[] = [];
  projets: Projet[] = [];

  constructor() {
    this.db = new Dexie('veilletechno');
    this.db.version(1).stores({
      projets: '++id, name',
      schedules:'++id, name',
      technologies:'++id'
    })
  }

  // projets: Projet[] = [
  //   { name:'test', finish: 0, todo: [], skills: [{technologies:[{1: 'python'}]}] },
  //   { name:'Maison', finish: 0, todo: [] },
  //   { name:'todo', finish: 0, todo: [] },
  //   { name:'Dexie', finish: 0, todo: [] },
  //   { name:'Maria', finish: 0, todo: [] },
  // ];
  // technologies: Technology[] = [
  //   {name: 'Angular', category:'front'},
  //   {name: 'PWA', category:'Hybride'},
  //   {name: 'javascript', category:'front'},
  //   {name: 'node.js', category:'backend'},
  //   {name: 'mongodb', category:'backend'},
  //   {name: 'ionic', category:'hybrid'}
  // ];

  /*


                PROJETS



  */
  getAllProjets(): Dexie.Promise<Projet[]> {
    return this.db.projets
                .toArray();
  }
  
  addProjet(projet: Projet){

    this.db.projets.add(projet)
  
  }
  updateProjet(projet: Projet){
    this.db.technologies.update(projet.id, projet)
    
  }
  deleteProjet(projet: Projet){
    this.db.projets.delete(projet.id)
  }
   /*


                TECHNOLOGIES



  */
  getAllTechnologies(): Dexie.Promise<Technology[]> {
    //return this.technologies;
    return this.db.technologies
              .toArray();
  }

  
  
  search(term: string){
    return this.technologies.filter(tech => tech.name.toLocaleLowerCase().includes(term));
  }

  addTechnology(technology: Technology){

    this.db.technologies.add(technology);
  }

  updateTechnology(technology: Technology){
    this.db.technologies.update(technology.id, technology)
  }

  deleteTechnology(Technology: Technology){
    this.db.technologies.delete(Technology.id);
  }

  getAllCategories(){
    return this.categories;
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

  addSkills(k):Dexie.Promise<string[]>{
    return this.db.technologies.each(skills =>{ return console.log(skills) })
        
  }
}
