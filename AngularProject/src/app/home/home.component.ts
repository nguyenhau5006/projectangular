import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Item } from '../model/models';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item> | undefined;
  items: Observable<Item[]> | undefined;
  config: any;

  itemList: Item[]=[];

  constructor(private readonly afs: AngularFirestore) {

   }


  // count: number | undefined;
  ngOnInit(): void {
    this.itemsCollection = this.afs.collection<Item>('Items');
    
    this.items = this.afs.collection<Item>('Items').valueChanges ({ idField: 'key' });
    this.items.subscribe(data=>{
      // this.count = data.length
      this.itemList = data
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.itemList.length
      };
    });
    // this.items.subscribe(data=>{this.itemList = data; console.log(this.itemList);})
    // console.log(this.itemlist);

    // this.add('idtest','valuetest')

    // this.delete('1');

    // this.update('5','maytinh');
    

  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }

  // add giá trị vào firebase
  add(id:string, name:string) {
    let it :Item = {};
    it.id = id;
    it.name = name;
    const docid = this.afs.createId();
    this.itemsCollection?.doc(docid).set(Object.assign({}, it));
  }
  // xóa giá trị vào firebase
  delete(docId:string) {
    this.itemsCollection?.doc(docId).delete();
  }

  //sửa dữ liệu trên firebase
  update(id:string, name:string){
    let docId = 'rrNw6Z9QX5REcsVHIHDO'
    let it :Item = {};
    it.id = id;
    it.name = name;

    this.itemsCollection?.doc(docId).update(it);
  }
}
