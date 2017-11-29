import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  users: Array<any> = [
    { name: 'Diana', created_at: Date() },
    { name: 'Ben', created_at: Date() },
    { name: 'Tina', created_at: Date() },
    { name: 'Kim', created_at: Date() },
  ];

  getUsers() {
    return this.users;
  }

  constructor() { }

}
