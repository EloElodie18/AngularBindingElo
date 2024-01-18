import { Injectable } from "@angular/core";
import { users } from "../users-data";

@Injectable()
export class DataService {
  filter(arg0: (banane: any) => any): import("./model/users").User[] {
    throw new Error('Method not implemented.');
  } //stockage temporaire
  users = users;
  constructor() {}

  getUsersData() {
    // requete API 
    return this.users;
  }
}
