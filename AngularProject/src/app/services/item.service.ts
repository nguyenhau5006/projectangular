import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, Item1 } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  getItems():Observable <Item1[]> {
    return this.http.get<Item1[]>('http://localhost:4200/api/items/');
  }

  insertItems(item:Item1):Observable <Item1[]> {
    return this.http.post<Item1[]>('http://localhost:8000/api/insert/', item);
  }
}
