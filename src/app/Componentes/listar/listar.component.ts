import { Component } from '@angular/core';
import { Estudiante } from '../Entidades/Estudiante';
import { TLista } from '../Controlador/TLista';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from "../agregar/agregar.component";

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule, AgregarComponent],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
   Estudiantes:Estudiante[]=[];
   selectedEstudiante:Estudiante|null=null;
   isOpen:boolean=false;
   isOpen2:boolean=false;

   constructor(private OLista:TLista){}
   ngOnInit(){
       this.OLista.Estudiantes$.subscribe((data)=>(this.Estudiantes=data));

   }
   editEstudiante(oEstudiante:Estudiante)
   {
      this.selectedEstudiante={...oEstudiante};
      this.isOpen=true;
   }
   deleteEstudiante(index:number)
   {
      this.OLista.deleteEstudiante(index);
   }

   submitNotaRecuperacion(oEstudiante:Estudiante)
   {
      this.selectedEstudiante={...oEstudiante};
      this.isOpen2=true;
   }
   onCloseModal()
   {
      this.isOpen= false;
      this.selectedEstudiante= null;
   }

   onCloseModal2()
   {
      this.isOpen2= false;
      this.selectedEstudiante= null;
   }
}
