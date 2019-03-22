import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent, NgbdModalContent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './user-service.service';
import { PrintDetailsComponent } from './print-details/print-details.component';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserComponent, NgbdModalContent1 } from './update-user/update-user.component';
import { DeleteDetailsComponent, NgbdModalConfirm } from './delete-details/delete-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';


const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'getDetails', component: PrintDetailsComponent },
  { path: 'createUser', component: CreateUserComponent },
  { path: 'updateDetails', component: UpdateUserComponent },
  { path: 'deleteDetails', component: DeleteDetailsComponent},
  { path: '', component: HomePageComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    DeleteDetailsComponent,
    NgbdModalConfirm,
    CreateUserComponent,
    PrintDetailsComponent,
    UpdateUserComponent,
    NgbdModalContent,
    NgbdModalContent1,
    HomePageComponent,
    
    
   
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  entryComponents: [NgbdModalConfirm,NgbdModalContent,NgbdModalContent1],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
