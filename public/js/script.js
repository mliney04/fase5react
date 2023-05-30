function ProcesarRespuestas(){
    let total = 3;
    let puntos= 0;

    let myform = document.forms["Formulario"];
    let respuestasCorrectas = ["a","a","c","b","b"];

    for (let i =  1; i <= total; i   ++) {
        if (myform["r" + i].value == null ||
            myform["r" + i].value == '' ) {
            alert('por favor responda todas preguntas');
            return false; 
        } else {
            if(myform["r" + i].value === respuestasCorrectas[i - 1])
               puntos++ ;
        }
    }
}
