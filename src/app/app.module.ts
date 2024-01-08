import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { CreateShoeComponent } from './create-shoe/create-shoe.component';
import { FormsModule } from '@angular/forms';
import { UpdateShoeComponent } from './update-shoe/update-shoe.component';
import { ShoeDetailsComponent } from './shoe-details/shoe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoeListComponent,
    CreateShoeComponent,
    UpdateShoeComponent,
    ShoeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
