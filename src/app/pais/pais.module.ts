import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BusquedaPaisComponent } from './pages/busqueda-pais/busqueda-pais.component';



@NgModule({
  declarations: [
    BusquedaPaisComponent,
  ],
  exports:[
    BusquedaPaisComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaisModule { }
