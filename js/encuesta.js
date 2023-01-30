const edad=document.getElementById("edad")
const ruts=document.getElementById("rutVigente")
const porc=document.getElementById("porcentaje")
const cred= document.getElementById("credito")
const prop=document.getElementById("propiedad")
const ahorro= document.getElementById("ahorro")
var rutValido;
var porcentajeValido;
var creditoValido;
var propiedadValida;
function rut(){
    if (ruts.value==2 ||ruts.value ==1){
        return rutValido= true
    }
    else  return rutValido =false
}
function porcentaje (){
    if ( porc.value > 0 && porc.value< 8 ){
        return porcentajeValido = true
    }
    else return alert("porcentaje no valido")
}
function creditar(){
    if (cred.value==1){
        return creditoValido=true
    }
    else return alert("noo es ")
}
function propiedad(){
    if (prop.value==2){
        return propiedadValida=true
    }
    else return alert("No puede Postular ")
}
function terminosContrato(){
    document.getElementById("botton").disabled= false
}
function postulacionMinvu(){
    if (edad.value > 17 && rutValido == true && porcentajeValido==true && creditoValido==true && propiedadValida==true && ahorro.value>3){
        alert("puede postular")
    }
    else return alert("No puede postular")
}



