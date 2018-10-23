import { Component, OnInit } from '@angular/core';
import { DTAService } from '../d-ta.service';
import { Observable } from 'rxjs';
import {Item} from '../item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '../../../node_modules/@angular/compiler';
import {MatDialog} from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { checkAndUpdateDirectiveDynamic } from '../../../node_modules/@angular/core/src/view/provider';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  items: Item[];
 

  constructor(private dtaService: DTAService,
    private http: HttpClient,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.dtaService.getGoods().subscribe(
      dtaService => this.items  = dtaService
    );  
  }

  openDialog(item): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      data:{
        id:item.id,
        name:item.name,
        price:item.price
      }
    });

    dialogRef.afterClosed().subscribe(result => {
       this.editContact(result);
    });
  }

  addItem(name: string, price: number){
    this.items.push({id:this.items.length + 1, name:name, price:price});
  }

  //  deleteItem(id: number) {
  //   this.dtaService.deleteUser(id);
      
  //  }

  deleteItem(id: number): void{
    this.items.splice(id, 1);
  }

   editContact(item) {
    const index = this.items.findIndex(c => c.id === item.id);
    this.items.splice(index, 1, item);
    }
}
