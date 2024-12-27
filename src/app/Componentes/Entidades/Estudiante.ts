import { Persona } from "./Persona";

export class Estudiante extends Persona{
    codigo:number;
    parcial1:number;
    parcial2:number;
    calificacionfinal?:number;
    examenrecuperacion?:number;
    notadefinitiva?:number;
    constructor(cod: number,ced: string, nom:string, ape:string, sex:string, fecnac:string, p1:number, p2:number, examrec?:number)
    {
        super(ced, nom, ape, sex, fecnac);
        this.codigo = cod;
        this.parcial1 = p1;
        this.parcial2 = p2;
        this.calificacionfinal = (this.parcial1 + this.parcial2) / 2;
        this.examenrecuperacion = examrec;

        this.notadefinitiva = examrec ? (this.calificacionfinal + examrec) / 2 : this.calificacionfinal;
    }

}

