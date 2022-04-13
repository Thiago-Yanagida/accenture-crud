import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { JobService } from '../job.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  itemSelected: any;
  aplicationText: FormControl;
  codeText: FormControl;
  rNameText: FormControl;
  mensageText: FormControl;
  eOpitionInput: any;



  constructor(private appService: AppService, private jobService: JobService) {
    this.itemSelected = this.appService.itemSelected;  
    this.aplicationText = new FormControl('');  
    this.codeText = new FormControl('');
    this.rNameText = new FormControl('');
    this.mensageText = new FormControl('');
  }

  ngOnInit(): void {
    this.initForm();
    this.editSelectInput();
  }

  initForm() {
    this.aplicationText = new FormControl(this.itemSelected ? this.itemSelected.codigoAplicacao : ''); 
    this.codeText = new FormControl(this.itemSelected ? this.itemSelected.codigoDescricaoRetorno : ''); 
    this.rNameText = new FormControl(this.itemSelected ? this.itemSelected.nomeDescricaoRetorno : '');
    this.mensageText = new FormControl(this.itemSelected ? this.itemSelected.mensagemDescricaoRetorno : '');

  }

  saveItem() {
  
    const item = {
      "identificadorDescricaoRetorno": null,
      "codigoAplicacao": this.aplicationText.value,
      "codigoDescricaoRetorno": this.codeText.value,  
      "nomeDescricaoRetorno": this.rNameText.value,
      "mensagemDescricaoRetorno": this.mensageText.value
    };
    if (this.itemSelected){
      item.identificadorDescricaoRetorno = this.itemSelected.identificadorDescricaoRetorno; 
      this.jobService.editItem(item).subscribe();
    } else {
      this.jobService.saveItem(item).subscribe();
    }
    
    this.appService.goHome();

  }

  goHome() {
    this.appService.goHome();  
  }

  editSelectInput() {
    this.jobService.selectInput().subscribe((w) =>{
      this.eOpitionInput = w
    });
  }


}
