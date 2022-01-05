import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item1 } from '../model/models';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-insert-item',
  templateUrl: './insert-item.component.html',
  styleUrls: ['./insert-item.component.css']
})
export class InsertItemComponent implements OnInit {

  frm: FormGroup;
  constructor(private fb:FormBuilder, private itemSrv:ItemService) {
    this.frm = fb.group({
      id: ['',Validators.required],
      name: ['',[Validators.required,Validators.minLength(5)]]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    let it: Item1 = new Item1();
    it.id = this.frm.controls.id.value;
    it.name = this.frm.controls.name.value;
    this.itemSrv.insertItems(it).subscribe(data=>{
      console.log(data);
      alert('insert is success!');
    })
    }
}
