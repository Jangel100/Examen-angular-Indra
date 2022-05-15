import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-busqueda-pais',
  templateUrl: './busqueda-pais.component.html',
  styles: [
  ]
})
export class BusquedaPaisComponent implements OnInit {
nombre:string=""
error:boolean=false;
paises:Country[]=[];
  constructor(private paisServices: PaisService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.error=false;
     this.paisServices.buscarPais(this.nombre).subscribe(respuesta=>{
       console.log(respuesta);
       this.paises=respuesta;
     },(err)=>{
       console.log("error");
       this.error=true;
       this.paises=[];
     }
     );
  }

}
