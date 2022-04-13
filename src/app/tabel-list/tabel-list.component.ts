import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { JobService } from '../job.service';

@Component({
  selector: 'app-tabel-list',
  templateUrl: './tabel-list.component.html',
  styleUrls: ['./tabel-list.component.scss']
})
export class TabelListComponent implements OnInit {

  tablePopulation: any;
  aplicationText: FormControl; 
  codeText: FormControl;
  rNameText: FormControl;
  inputOption: any;
  totalItens: number;
  page: number;
  

  constructor(
    private job: JobService,  
    private appService: AppService
  ) {
    this.aplicationText = new FormControl('');
    this.codeText = new FormControl(''); 
    this.rNameText = new FormControl('');
    this.totalItens = 0;
    this.page = 1
  }

  ngOnInit(): void {  
    this.callApi()  
    this.selectInput() 

  }

  callApi() {
    this.job.callApi(20, this.page, "", "", "").subscribe((data: any) => {  
      this.tablePopulation = data
      this.totalItens = data.totalElements

    })

  }

  delete(id: number) {
    this.job.delete(id).subscribe((x) => {   
      this.callApi()  
    })
  }

  selectInput() { 
    this.job.selectInput().subscribe((z) => {
        this.inputOption = z 
        console.log(this.inputOption)
    })
  }

  editItem(item: any) {
    this.appService.goToEdit(item);
  }

  filterItem() {
    this.job.callApi(20, 1, this.aplicationText.value,
    this.codeText.value, this.rNameText.value).subscribe((data) => {
      this.tablePopulation = data  
    })
  }

  pageEvent(event: any) {
    console.log(event)  
    this.page = event.page;
    this.callApi(); 
  }

}
