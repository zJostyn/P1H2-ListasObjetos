import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Estudiante } from '../Entidades/Estudiante';
import { TLista } from '../Controlador/TLista';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  @Input() isOpen=false;
  @Input() isOpen2=false;
  @Input() selectedEstudiante:Estudiante | null = null;
  @Output() close = new EventEmitter<void>();

  oEstudiante:Estudiante={
    codigo:0,
    cedula:'',
    nombres:'',
    apellidos:'',
    sexo:'',
    fechanacimiento:'',
    parcial1:0,
    parcial2:0
  }

  constructor(private OLista:TLista){}
  public resetEstudiante()
  {
    this.oEstudiante={
      codigo:0,
      cedula:'',
      nombres:'',
      apellidos:'',
      sexo:'',
      fechanacimiento:'',
      parcial1:0,
      parcial2:0
    }
  }
  
  ngOnChanges( changes: SimpleChanges)
  {
    if(changes['selectedEstudiante'] && this.selectedEstudiante)
    {
       this.oEstudiante = { ...this.selectedEstudiante};

    }else if(!this.selectedEstudiante){
      this.resetEstudiante();
    }
  }
  closeModal()
  {
    this.close.emit();
  }
  oncCloseModal()
  {
    this.closeModal();
  }
  onSubmit()
  {
    if(this.selectedEstudiante)
    {
      this.oEstudiante.calificacionfinal = (this.oEstudiante.parcial1 + this.oEstudiante.parcial2) / 2;
      this.oEstudiante.notadefinitiva = this.oEstudiante.examenrecuperacion ? (this.oEstudiante.calificacionfinal + this.oEstudiante.examenrecuperacion) / 2 : this.oEstudiante.calificacionfinal;
      this.OLista.updateEstudiante(this.oEstudiante);
    }
    else
    {
      this.oEstudiante.calificacionfinal = (this.oEstudiante.parcial1 + this.oEstudiante.parcial2) / 2;
      this.oEstudiante.notadefinitiva = this.oEstudiante.examenrecuperacion ? (this.oEstudiante.calificacionfinal + this.oEstudiante.examenrecuperacion) / 2 : this.oEstudiante.calificacionfinal;
      this.OLista.addEstudiante(this.oEstudiante);
    }
     this.closeModal();
  }

  onSubmit2()
  {
    if(this.selectedEstudiante)
    {
      this.oEstudiante.calificacionfinal = (this.oEstudiante.parcial1 + this.oEstudiante.parcial2) / 2;
      this.oEstudiante.notadefinitiva = this.oEstudiante.examenrecuperacion ? (this.oEstudiante.calificacionfinal + this.oEstudiante.examenrecuperacion) / 2 : this.oEstudiante.calificacionfinal;
      this.OLista.updateEstudiante(this.oEstudiante);
    }
     this.closeModal();
  }
}
