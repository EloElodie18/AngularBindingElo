import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() jeSaisie = new EventEmitter<string>(); //creation bouche, en string car les valeurs données dans le html étaient des string (value='title' par exemple)
  input: any;
  constructor() {}

  ngOnInit() {} 
  
  //methode pr recuperer la valeur de la saisie de l'input
    onKey(event:any) { //recuperation de la saisie, de l'évenement de type any
    console.log(event);//essai si evenement s'affiche console
    console.log(event.target.value); //essai de recuperation, et s'affiche ds la console
    this.jeSaisie.emit(event.target.value);
  }
}
