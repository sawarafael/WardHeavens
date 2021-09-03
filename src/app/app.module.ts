import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ConfirmationComponent } from './pages/signup/confirmation/confirmation.component';
import { CollaboratorsComponent } from './pages/collaborators/collaborators.component';
import { FiltrosComponent } from './pages/collaborators/filtros/filtros.component';
import { NewCollaboratorsComponent } from './pages/collaborators/new-collaborators/new-collaborators.component';
import { EditCollaboratorComponent } from './pages/collaborators/edit-collaborator/edit-collaborator.component';
import { ProfileComponent } from './pages/collaborators/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ConfirmationComponent,
    CollaboratorsComponent,
    FiltrosComponent,
    NewCollaboratorsComponent,
    EditCollaboratorComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
