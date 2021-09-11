import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';

@Component({
    selector: 'app-edit-employee',
    templateUrl: './edit-employee.component.html',
    styleUrls: ['./edit-employee.component.css'],
})

export class EditEmployeeComponent implements OnInit {

    public form = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        salary: new FormControl(''),
    });

    public employee = new Employee();
    public submitted = false;
    public data: any;
    public id: any;

    constructor(
        private employeeService: EmployeeService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params.id;
        this.getData();
    }

    public getData() {
        this.employeeService.getDataById(this.id).subscribe(res => {
            this.data = res;
            this.employee = this.data;
            this.form = new FormGroup({
                name: new FormControl(this.employee.name, Validators.required),
                email: new FormControl(this.employee.email, [Validators.required, Validators.email]),
                salary: new FormControl(this.employee.salary, Validators.required),
            });
        });
    }

    public updateData() {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        this.employeeService.updateData(this.id, this.form.value).subscribe(res => {
            this.data = res;
            this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
                timeOut: 3000,
                progressBar: false,
            });
            this.router.navigateByUrl('/');
        });
    }

    get f() {
        return this.form.controls;
    }
}
