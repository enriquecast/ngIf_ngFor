import { NgModule } from '@angular/core';
import { Component } from '@angular/core'; 


@Component({
    selector: 'app-body',
    templateUrl: 'body.component.html'

  })
  export class BodyComponent {

    mostrar:boolean = false;
  
    public frase:any={
      mensaje:"un gran poder requiere una gran responsabilidad",
      autor:"Ben Parker"
    }

    personajes:any[]= ["Spideman","Vemon","Dr.Octopus","El coco"]
        
  }

