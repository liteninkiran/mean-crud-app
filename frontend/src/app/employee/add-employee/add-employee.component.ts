import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css'],
})

export class AddEmployeeComponent implements OnInit {

    public form: FormGroup;

    constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.createForm();
    }

    public createForm() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            salary: ['', Validators.required],
        });
    }

    public insertData() {

    }

}
