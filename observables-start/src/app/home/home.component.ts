import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  myObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
     const myNumbers = Observable.interval(1000);
     this.numbersObsSubscription = myNumbers.subscribe((number: number) => {
       console.log(number);
    });

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);

      setTimeout(() => {
        observer.next('second package');
      }, 3000);

      // setTimeout(() => {
      //   observer.error('this is not work');
      // }, 5000);

      setTimeout(() => {
        observer.complete();
      }, 4000);

      setTimeout(() => {
        observer.next('thirth package');
      }, 5000);
    });

    this.myObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (data: string) => { console.log(data); },
      () => { console.log('completed'); }
    );
  }

  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.myObsSubscription.unsubscribe();
  }

}
