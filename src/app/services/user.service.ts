import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  getUsers() {
    return [
      {
        name: 'Mayank',
        age: 21,
      },
      {
        name: 'Rohit',
        age: 31,
      },
    ];
  }
}
