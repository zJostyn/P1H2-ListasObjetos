import { BehaviorSubject } from "rxjs";
import { Estudiante } from "../Entidades/Estudiante";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root',
})

export class TLista{
private ListaEstudiantes:Estudiante[]=[
  new Estudiante(1, '0706203791','Jostyn','Cruz','Masculino','2003-05-10', 10, 9),
  new Estudiante(2, '0712545789','Juan','Quito','Masculino','2003-05-10', 6, 6),
];
private EstudiantesSubject = new  BehaviorSubject<Estudiante[]>(this.ListaEstudiantes);
Estudiantes$ = this.EstudiantesSubject.asObservable();

constructor(){}

getEstudiantees()
{
    return this.EstudiantesSubject.value;
}

addEstudiante(ch:Estudiante)
{
    this.ListaEstudiantes.push(ch);
    this.EstudiantesSubject.next(this.ListaEstudiantes);
}
updateEstudiante(ch:Estudiante)
{
    const currentEstudiante=this.EstudiantesSubject.value;
    const index= currentEstudiante.findIndex(c=>c.codigo=== ch.codigo);
    if(index !==-1)
    {
        this.ListaEstudiantes[index]=ch;
        this.EstudiantesSubject.next(this.ListaEstudiantes);
    }else
    {
        console.error('Estudiante no encontrado');
    }
}
deleteEstudiante(index:number)
{
    this.ListaEstudiantes.splice(index,1);
    this.EstudiantesSubject.next(this.ListaEstudiantes);
}


}