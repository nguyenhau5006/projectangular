import { Component, OnInit } from '@angular/core';
import { Item, Item1 } from '../model/models';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-node',
  templateUrl: './item-node.component.html',
  styleUrls: ['./item-node.component.css']
})
export class ItemNodeComponent implements OnInit {

  constructor(private itService:ItemService) { }

  itemList: Item1[]=[];
  ngOnInit(): void {
    this.itService.getItems().subscribe(data=>{this.itemList = data;});
  }

}
