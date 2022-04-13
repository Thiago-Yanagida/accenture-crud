import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabelListComponent } from './tabel-list/tabel-list.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AppRoutingModule } from './app.routing.module';
import { AppService } from './app.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    AppComponent,
    TabelListComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//responsavel pela configuração e importação de componentes usados na tela ex: paginador (ngx bootstrap)
