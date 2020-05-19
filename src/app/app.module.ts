import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {RouterModule, Routes} from '@angular/router';
import {ValueComponent} from "./components/value/value.component";
import {AppComponent} from "./components/app/app.component"
import {ValueCreateComponent} from "./components/value/value.create.component";
import {ValueEditComponent} from "./components/value/value.edit.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

const appRoutes: Routes = [
  { path: 'list', component: ValueComponent },
  { path: 'edit/:id', component: ValueEditComponent },
  { path: 'create', component: ValueCreateComponent },
  { path: '', component: ValueComponent },
  { path: '*', component: ValueComponent },
];

@NgModule({
  declarations: [
    ValueComponent,
    ValueCreateComponent,
    ValueEditComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
