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
    this.itemSelected = this.appService.itemSelected;  //buscando o usuário da service (itemSelected) 
    this.aplicationText = new FormControl('');  //formcontrol administra os eventos que acontecem  o input
    this.codeText = new FormControl('');
    this.rNameText = new FormControl('');
    this.mensageText = new FormControl('');
  }

  ngOnInit(): void {
    this.initForm();
    this.editSelectInput();
  }

  initForm() {
    this.aplicationText = new FormControl(this.itemSelected ? this.itemSelected.codigoAplicacao : ''); //aqui ele verifica se o itemSelected tem valor caso ele nao tenha ele retorna uma string vazia caso tenha ele seta o valor selecionado nos inputs 'ele só poem o valor no input caso selecione editar'
    this.codeText = new FormControl(this.itemSelected ? this.itemSelected.codigoDescricaoRetorno : ''); //o ? significa 'if' o ':' significa else
    this.rNameText = new FormControl(this.itemSelected ? this.itemSelected.nomeDescricaoRetorno : '');
    this.mensageText = new FormControl(this.itemSelected ? this.itemSelected.mensagemDescricaoRetorno : '');

  }

  saveItem() {
  
    const item = {
      "identificadorDescricaoRetorno": null,
      "codigoAplicacao": this.aplicationText.value,
      "codigoDescricaoRetorno": this.codeText.value,  //a função cria um objeto com os valores inseridos nos inputs
      "nomeDescricaoRetorno": this.rNameText.value,
      "mensagemDescricaoRetorno": this.mensageText.value
    };
    if (this.itemSelected){
      item.identificadorDescricaoRetorno = this.itemSelected.identificadorDescricaoRetorno; //este if serve para saber se o itemSelected tem valor, caso tenha ele ja sabe que é uma edição então ele só edita e salva, caso nao seja ele ja sabe que é da função de adicionar
      this.jobService.editItem(item).subscribe();
    } else {
      this.jobService.saveItem(item).subscribe();
    }
    
    this.appService.goHome();

  }

  goHome() {
    this.appService.goHome();  //esta função serve somente para retornar para a pagina inicial (tabel-list)
  }

  editSelectInput() {
    this.jobService.selectInput().subscribe((w) =>{
      this.eOpitionInput = w
    });
  }


}
