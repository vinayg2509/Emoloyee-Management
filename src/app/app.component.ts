import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';
import { ServicesService } from './shared/services.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'salary',
    'experience',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor(private dialog: MatDialog, private empService: ServicesService) {}
  ngOnInit(): void {
    this.getEmpolyeeList();
  }

  openAddEditEmpForm() {
    this.dialog.open(AddEditEmpComponent);

  }

  getEmpolyeeList() {
    this.empService.getAllEmployee().subscribe({
      next: (res: any) => {
        console.log(res);
        
        this .dataSource= new MatTableDataSource(res)
       this.dataSource.sort=this.sort
       this.dataSource.paginator=this.paginator
      },
      error: (err: any) => {
        alert(err);
      },
    });
  }

  deleteEmployee(id:number){
    this.empService.deleteEmployeeById(id).subscribe({
      next:(res)=>{
        alert("Employee deleted")
        this.getEmpolyeeList()
      },error:console.log
      
    })

  }
}
