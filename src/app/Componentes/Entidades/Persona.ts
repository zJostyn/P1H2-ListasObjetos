export class Persona {
    cedula: string;
    nombres: string;
    apellidos: string;
    sexo: string;
    fechanacimiento: string;
    
    constructor(ced: string, nom:string, ape:string, sex:string, fecnac:string) {
        this.cedula = ced;
        this.nombres = nom;
        this.apellidos = ape;
        this.sexo = sex;
        this.fechanacimiento = fecnac;
    }
}