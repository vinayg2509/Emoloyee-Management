import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from '../shared/services.service';
import { DialogRef } from '@angular/cdk/dialog';
@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.scss'],
})
export class AddEditEmpComponent {
  empForm: FormGroup;
  education: string[] = [
    'Master Degree',
    'Bachelor Degree',
    'Diploma',
    'PUC',
    'SSLC',
  ];
  constructor(
    private fb: FormBuilder,
    private empService: ServicesService,
    private dialogref: DialogRef<AddEditEmpComponent>
  ) {
    this.empForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      salary: '',
      experience: '',
    });
  }

  onEmpForm() {
 
    if (this.empForm.valid) {
      console.log(this.empForm.value);
      
      this.empService.addEmployee(this.empForm.value).subscribe({
        next: () => {
          alert("Employee added sucessfully")
          this.dialogref.close()},
        error: (err: any) => {
          alert(err);
        },
      });
    }
  }
}
