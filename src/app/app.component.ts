import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employeeManagement';

  constructor(private dialog:MatDialog){}

  openAddEditEmpForm()
  {
    this.dialog.open(AddEditEmpComponent)
  }
}
