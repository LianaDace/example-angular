import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlannerComponent } from './pages/planner/planner.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationFormComponent } from './pages/registration/registration-form/registration-form.component';
import { CharactersComponent } from './pages/characters/characters.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    HeaderComponent,
    RegistrationComponent,
    RegistrationFormComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
