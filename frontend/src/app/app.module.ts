import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';

const appRoutes: Routes = [
    {
        path: '',
        component: EmployeeComponent,
    },
    {
        path: 'add-employee',
        component: AddEmployeeComponent,
    },
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        EmployeeComponent,
        AddEmployeeComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent,
    ],
})

export class AppModule { }
