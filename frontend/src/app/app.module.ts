import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

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
        RouterModule.forRoot(appRoutes),
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent,
    ],
})

export class AppModule { }
