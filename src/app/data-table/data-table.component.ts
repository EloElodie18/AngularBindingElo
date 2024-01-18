import { Component, Input, OnInit } from '@angular/core';
import { users } from 'src/users-data';
import { User } from '../model/users';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @Input()
  dataUser: User[] = [];
  constructor() {}

  ngOnInit() {}
}
