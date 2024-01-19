import { Component, OnInit, VERSION } from '@angular/core';
import { DataService } from './data.service';
import { User } from './model/users';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  usersToDisplay: User[] = []; //ça prdt le même resultat que [] seul; 
  usersEnDur: User[] = [];
  sauvegardeTexteSaisie: string = '';
  sauvegardeFiltre: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() { //a noter: le syntaxe [...] permet une copie par valeur et non par réference comme je l'avait fait à la base
    console.log('jaffiche mes données:' , this.dataService.getUsersData()); //affiche mes données ds console
    this.usersEnDur = [...this.dataService.getUsersData()]; //me permet de relier les données du TS vers le Html, tjrs du parent
    this.usersToDisplay = [...this.usersEnDur]; //tableau qu'on écrase jamais
  }

  afficherTexteDeInputRecuDeEnfant() { //content = recherche émise, lors de l'étape 2 du TP
    console.log("Parent: ", this.sauvegardeTexteSaisie);
    this.usersToDisplay = this.usersEnDur.filter((banane) =>
      banane.name[this.sauvegardeFiltre].toLowerCase().includes(this.sauvegardeTexteSaisie.toLowerCase()) //on utilise l'annotation [] pr que ce soit dynamique, evitant ainsi de noter title, first ou last.
    ); //filtrer données utilisateur en fonction propriete choisit et en fonction d'un texte saisie et on sauvegarde le resulat ds une propriete qui est userToDisplay.
  }

  onSearch (valeurSaisie : string) {//garde la saisie de texte et fait appel à la methode, 
    //je peux le tester en console.log, dc qd je clic, ds ma console ça me l'affiche
    this.sauvegardeTexteSaisie = valeurSaisie;
    this.afficherTexteDeInputRecuDeEnfant();
  }

  onSelector (filtreSaisie : string) {//garde le filtre choisit en memoire et fait appel à la methode, je peut mettre en type: 'firts' | 'last' | 'title' en modifiant l'eventMitter en tant que tel! 
    this.sauvegardeFiltre = filtreSaisie;
    this.afficherTexteDeInputRecuDeEnfant();
  }
 
}

