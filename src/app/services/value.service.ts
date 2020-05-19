import {Injectable} from '@angular/core'

import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, throwError} from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import {Subject} from "rxjs";

export class Value {
  id: string;
  value: string;
}

@Injectable()
export class ValueService {
  constructor(private http: HttpClient) {
  }

  getValues(): Observable<Value[]> {
    return this.http.get<{values:Value[]}>("/rest/values").pipe(map(res => res.values));
  }

  subscribe(): Subject<any> {
    let eventSource = new EventSource("/rest/values/subscribe");
    let subscription = new Subject();
    eventSource.addEventListener("message", event=> {
      console.info("Got event: " + event);
      subscription.next(event);
    });
    return subscription;
  }


  createValue(value: Value): Observable<Value> {
    //let bodyString = JSON.stringify(value);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let option = {headers: headers};
    console.log("Creating Value : " + value);
    return this.http.post<Value>("/rest/values", value, option)
      .pipe(catchError(err => {
        console.log('Handling error locally and rethrowing it...', err);
        return throwError(err);
      }));
  }

  updateValue(value: Value): Observable<Value> {
    //let bodyString = JSON.stringify(value);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let option = {headers: headers};
    console.log("Updating Value : " + value);
    return this.http.put<Value>("/rest/values/" + value.id, value, option)
      .pipe(catchError(err => {
        console.log('Handling error locally and rethrowing it...', err);
        return throwError(err);
      }));
  }

  getValue(id: number) {
    return this.http.get(`/rest/value/${ id }`)
      .pipe(catchError(err => {
        console.log('Handling error locally and rethrowing it...', err);
        return throwError(err);
      }));
  }
}
