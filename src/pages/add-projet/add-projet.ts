
import { Component } from '@angular/core';
import {  NavController, NavParams, AlertController } from 'ionic-angular';
import { Projet } from '../../models/projet';
import { DataService } from '../../providers/data/data.service';
import { Technology } from '../../models/technology';


@Component({
  selector: 'page-add-projet',
  templateUrl: 'add-projet.html',
})
export class AddProjetPage {

  projet: Projet ;
  categories: string[];
  technologies: Technology[];
  technology: Technology;
  modify: boolean;
  skills: any[] = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private dataService :DataService,
              private alertCtrl: AlertController) {

    if ((navParams.get('projet')) == null){
      this.projet = {name:'', finish:0, skills:[], todos:[]};
      this.modify = false;
    }
    else{
      this.projet = navParams.get('projet');
      this.modify = true;

    }

    this.dataService.getAllTechnologies().then(data => this.technologies = data );        
    

  }

  ionViewDidEnter(){
    this.categories = this.dataService.getAllCategories();
    console.log('this technologies : ',this.technologies);
  }



   addProjet(){
   
    this.dataService.addProjet(this.projet);
    this.navCtrl.pop();
   }

   updateProjet(){
    this.dataService.updateProjet(this.projet);
    this.projet = { name: '', finish:0, skills:[], todos: []};
    this.navCtrl.pop();
  }
     
  addTechnoToProjet(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Quelle compétences voulez vous ajouter');

    
    for ( let i = 0; i < this.technologies.length; i++ ) {
      if (  this.skills[i] == this.technologies[i]['id'] ) {
        
        
        alert.addInput({
          type: 'checkbox',
          label: this.technologies[i].name.toString(),
          value:  this.technologies[i].id.toString(),
          checked: true
        });
      
      } else {

        alert.addInput({
          type: 'checkbox',
          label: this.technologies[i].name.toString(),
          value: this.technologies[i].id.toString()  ,
          checked: false
        });

      }
    }
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        this.skills = []
        console.log('Checkbox data:', data);
        this.projet.skills = data

          for(let i =0; i< this.technologies.length; i++){
            for(let j =0; j< this.projet.skills.length; j++){
              if(this.technologies[i].id.toString() == this.projet.skills[j].toString()  )
                { 
                
                  this.skills = [...this.skills, this.technologies[i]] 
                  console.log(this.skills)
                }
            }
        
      }}
    });


    alert.present();


      
    
     //this.dataService.addSkills(this.skills).then(data => this.projet.skills = data )
    
  }
}
