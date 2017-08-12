import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UserService {
  
activeUsers = ['Max', 'Anna'];
inactiveUsers = ['Chris', 'Manu'];
count = 0;
counterUpdated = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    
    this.counterUpdated.emit(++this.count);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterUpdated.emit(++this.count);
  }
      

}