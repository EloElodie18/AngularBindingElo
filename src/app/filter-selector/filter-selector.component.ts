import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css'],
})
export class FilterSelectorComponent implements OnInit {
  @Output() boucheJeClicUnFiltre = new EventEmitter();
  constructor() {}

  ngOnInit() {}

jaiCliqueSurUnFiltre (event:any) {
  console.log(`'jaiClique: '  ${event}`);
  console.log(`'jaiClique2: '  ${event.target.value}`);
  this.boucheJeClicUnFiltre.emit(event.target.value);
}

}
