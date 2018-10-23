import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment';
import {Item} from './item';


@Injectable({
  providedIn: 'root'  
})
export class DTAService {
  items: Item[] = [];

  constructor(private http: HttpClient){ 
    
  }

  public getGoods(): Observable<Item[]> {
    return this.http.get<Item[]>(environment.urlS)
  }

  //  public updateGoods(item):Observable<Item[]> {
  //    return this.http.put<Item[]>(item,environment.urlS);
  //  }

  public deleteUser(id) {
    const contact = this.items.findIndex(c => c.id === id);
    this.items.splice(contact, 1);
  }
  
  
}
