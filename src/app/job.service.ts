import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private http: HttpClient  
  ) { }

  callApi(perpage: number, page: number, aplicationText: string,
    codeText: string, rNameText: string) {  

    let route = 'http://localhost:8080/api/parametro/1.0.0/descricoesretornos?per_page= ' + perpage + '&page=' + page;
    
    if (codeText && codeText.length > 0) {
      route += '&codigoDescricaoRetorno=' + codeText;  
    }

    if (aplicationText && aplicationText.length > 0) {   
      route += '&codigoAplicacao=' + aplicationText;
    }

    if (rNameText && rNameText.length > 0) {
      route += '&nomeDescricaoRetorno=' + rNameText;  
    }
    
    return this.http.get(route);
  } 

  delete(id: number) {
    return this.http.delete('http://localhost:8080/api/parametro/1.0.0/descricoesretornos/' + id)
  } 

  selectInput() {
    return this.http.get('http://localhost:8080/api/sistema/1.0.0/dominios/1175/conteudos?per_page=200&page=1')

  }

  saveItem(item: any) {
    return this.http.post('http://localhost:8080/api/parametro/1.0.0/descricoesretornos', item)

  } 

  editItem(item: any) {
    return this.http.put('http://localhost:8080/api/parametro/1.0.0/descricoesretornos/' + item.identificadorDescricaoRetorno, item)

  } 



}


// job service serve para fazer as requisições nas api's
