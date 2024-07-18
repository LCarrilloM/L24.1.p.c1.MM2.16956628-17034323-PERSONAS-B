export default class Cl_persona{
    constructor(){
        this.acumE=0;
        this.cantP=0;
        this.mayorEM=0;
        this.menor=9999;
    }

    procesarDato(dat){
        this.acumE+=dat.getEdad();
        this.cantP++;
        if(dat.getSexo()=="F"){
            if(dat.getEdad()>this.mayorEM){
                this.mayorEM=dat.getEdad();
            }
        }
    }

    devMayorEM(){
        return this.mayorEM;
    }

    promEdad(){
        return this.acumE/this.cantP;
    }
}