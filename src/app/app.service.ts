import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  itemSelected: any;

  constructor(private router: Router) {
  }

  goToEdit(item: any) {
    this.itemSelected = item;  
    this.router.navigateByUrl('/edit');

  }

  goHome() {
    this.itemSelected = null;   
    this.router.navigateByUrl('/')
  }

}


