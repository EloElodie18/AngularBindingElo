import { Component, OnInit, VERSION } from '@angular/core';
import { DataService } from './data.service';
import { User } from './model/users';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  usersToDisplay: User[] = [];
  usersEnDur: User[] = [];
  sauvegardeTexteSaisie: string = '';
  sauvegardeFiltre: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() { //a noter: le syntaxe [...] permet une copie par valeur et non par réference comme je l'avait fait à la base
    console.log(this.dataService.getUsersData());
    this.usersEnDur = [...this.dataService.getUsersData()]; //me permet de relier les données du TS vers le Html, tjrs du parent
    this.usersToDisplay = [...this.usersEnDur]; //tableau qu'on écrase jamais
  }

  afficherTexteDeInputRecuDeEnfant() { //content = recherche émise, lors de l'étape 2 du TP
    console.log("Parent: ", this.sauvegardeTexteSaisie);
    this.usersToDisplay = this.usersEnDur.filter((banane) =>
      banane.name[this.sauvegardeFiltre].toLowerCase().includes(this.sauvegardeTexteSaisie.toLowerCase()) //on utilise l'annotation [] pr que ce soit dynamique, evitant ainsi de noter title, first ou last.
    );
  }

  onSearch (valeurSaisie : string) {//garde la saisie de texte et fait appel à la methode, 
    //je peux le tester en console.log, dc qd je clis, ds ma cosole ça me l'affiche
    this.sauvegardeTexteSaisie = valeurSaisie;
    this.afficherTexteDeInputRecuDeEnfant();
  }

  onSelector (filtreSaisie : string) {//garde le filtre choisit en memoire et fait appel à la methode 
    this.sauvegardeFiltre = filtreSaisie;
    this.afficherTexteDeInputRecuDeEnfant();
  }
 
}
