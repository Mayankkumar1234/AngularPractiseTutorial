import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
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
