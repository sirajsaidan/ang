import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExpComponent } from './dialog-exp/dialog-exp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(DialogExpComponent);
  }

}