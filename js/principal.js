/**PERSONAS-B
Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y
reporte al final la edad promedio y la edad mayor entre las mujeres.
Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18),
José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida
presenta el siguiente formato:
Edad promedio: 18.50
Edad mayor entre las mujeres: 19
 * 
 */

import Cl_persona from "./Cl_persona.js";
import Cl_dato from "./Cl_dato.js";

let dato1=new Cl_dato("Luis",15,"M");
let dato2=new Cl_dato("Ana",19,"F");
let dato3=new Cl_dato("Jose",21,"M");
let dato4=new Cl_dato("Carmen",17,"F");
let dato5=new Cl_dato("Rosa",18,"F");
let dato6=new Cl_dato("Jose",22,"M");
let dato7=new Cl_dato("Maria",17,"F");
let dato8=new Cl_dato("Luz",19,"F");
let dato9=new Cl_dato("Rafa",23,"M");
let dato10=new Cl_dato("Liz",15,"F");
let dato11=new Cl_dato("Marcos",20,"M");
let dato12=new Cl_dato("Leo",16,"M");

let persona=new Cl_persona();

persona.procesarDato(dato1);
persona.procesarDato(dato2);
persona.procesarDato(dato3);
persona.procesarDato(dato4);
persona.procesarDato(dato5);
persona.procesarDato(dato6);
persona.procesarDato(dato7);
persona.procesarDato(dato8);
persona.procesarDato(dato9);
persona.procesarDato(dato10);
persona.procesarDato(dato11);
persona.procesarDato(dato12);


let salida=document.getElementById("salida");

salida.innerHTML+="<br>  Edad promedio: " +persona.promEdad();
salida.innerHTML+="<br>  Ead mayor entre las mujeres: " +persona.devMayorEM();