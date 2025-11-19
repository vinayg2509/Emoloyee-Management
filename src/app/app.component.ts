import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';
import { ServicesService } from './shared/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'employeeManagement';

  constructor(private dialog:MatDialog,private empService:ServicesService){}
  ngOnInit(): void {
    this.getEmpolyeeList()
  }
 

  openAddEditEmpForm()
  {
    this.dialog.open(AddEditEmpComponent)
  }

  getEmpolyeeList()
  {
    this.empService.getAllEmployee().subscribe({
      next:(res:any)=>{
        console.log(res);
        
      },error:(err:any)=>{
      alert(err)
    }
    })
  }

 

}
