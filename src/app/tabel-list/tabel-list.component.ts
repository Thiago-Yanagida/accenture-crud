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
  aplicationText: FormControl; //formcontrol é responsavel por manipular os eventos que acontecem nos inputs
  codeText: FormControl;
  rNameText: FormControl;
  inputOption: any;
  totalItens: number;
  page: number;
  

  constructor(
    private job: JobService,  //responsável por criar uma nova instancia do objeto dessa forma ele permite que a pagina funcione e execute a sua primeira funçao
    private appService: AppService
  ) {
    this.aplicationText = new FormControl('');
    this.codeText = new FormControl('');  //formControl administra os eventos que podem acontecem no input
    this.rNameText = new FormControl('');
    this.totalItens = 0;
    this.page = 1
  }

  ngOnInit(): void {  //ngOnInit é a primeira função ela é feita logo em que a pagina carrega
    this.callApi()  //aqui ela chama a função callApi que aqui tem a função de popular a tabela
    this.selectInput()  //aqui ela chama a função selectInput para que o input tenha opções que estão armazenadas na api

  }

  callApi() {
    this.job.callApi(20, this.page, "", "", "").subscribe((data: any) => {   //callApi é a função que popula a tabela ela é a segunda função executada quando a pagina carrega a primeira é a oninit
      this.tablePopulation = data
      console.log(data)
      this.totalItens = data.totalElements

    })

  }

  delete(id: number) {
    this.job.delete(id).subscribe((x) => {   //essa função é responsavel por deletar um item selecionado reconhecido pelo parametro id
      this.callApi()  //após deletar o item selecionado essa função chama novamente a função callAPi para que a tabela fique atualizada
    })
  }

  selectInput() {  //essa função chama api e da uma opçao no input que é do tipo select 
    this.job.selectInput().subscribe((z) => {
        this.inputOption = z  //
        console.log(this.inputOption)
    })
  }

  editItem(item: any) {
    this.appService.goToEdit(item); //éssa função é responsavel por te mandar para a pagina para de editar e além disso ela armazena o valor do item selecionado no parametro 'item'
          //alem da primeira função essa função tambem te leva quando o botão 'adicionar' for clicado
  }

  filterItem() {
    this.job.callApi(20, 1, this.aplicationText.value,
      this.codeText.value, this.rNameText.value).subscribe((data) => {
        this.tablePopulation = data   //responsavel por chamar novamente a função callApi e verificar se os inputs tem valor para que seja filtrado
        
      })
  }

  pageEvent(event: any) {
    console.log(event)  
    this.page = event.page; //indica a pagina que o usuário selecionou no paginador
    this.callApi();  //recarrega a população da tabela chamando a função callApi
  }

}
