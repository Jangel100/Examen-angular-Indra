
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BusquedaPaisComponent } from './pais/pages/busqueda-pais/busqueda-pais.component';

const routes : Routes=[
{
    path:'',
    component: BusquedaPaisComponent,
    pathMatch:'full'
},
{
    path:'pais/:id',
    component: BusquedaPaisComponent,
    pathMatch:'full'
},
{
path:'**',
redirectTo:''
}
];


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}