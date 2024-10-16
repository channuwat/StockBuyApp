import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SheetsService {

  constructor(public http: HttpClient) { }

  getMaterial() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.CONNECTION_URL)//, 
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          if (err.status == 0) {
            console.log(err);
            reject(err);
          }
          reject(err);
        });
    });
  }


  setStore(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getStore(key: string) {
    let store: any = localStorage.getItem(key) ?? null
    return JSON.parse(store)
  }
}
