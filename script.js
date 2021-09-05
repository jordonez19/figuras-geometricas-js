
// ------------------- Codigo del Cuadrado -------------------
console.group('Cuadrado');

    function perimetroCuadrado(lado){
        return lado * 4;
    }
    function areaCuadrado (lado) {
        return lado * lado;
    }

console.groupEnd();

function calcularPerimetroCuadrado(){
    let inputCuadrado = document.getElementById('inputCuadrado');
    let valueCuadrado = inputCuadrado.value;
    
    let perimetro = perimetroCuadrado(valueCuadrado);
    alert('El perimetro del cuadrado es: ' + perimetro);

}

function calcularAreaCuadrado(){
    let inputCuadrado = document.getElementById('inputCuadrado');
    let valueCuadrado = inputCuadrado.value;
git 
    let area = areaCuadrado(valueCuadrado);
    alert('El area del cuadrado es: ' + area);
}



// ------------------- Codigo del Triangulo  -------------------

console.group('Triangulo');

    function perimetroTriangulo ( lado1, lado2, base ){
        return lado1 + lado2 + base
    }

    function areaTrg(base, altura){

        console.log()
        return (base * altura) / 2;
    }
    
console.groupEnd();

//-------------------------------------------

function perimetroTriangulo ( lado1, lado2, base ){
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura){
    console.log()
    return (base * altura) / 2;
}

function calcularPerimetroTriangulo(){
    let lado1 = document.getElementById('inputTriangulo1');
    let lado2 = document.getElementById('inputTriangulo2');
    let Base = document.getElementById('inputTrianguloBase');


    let valueLado1 = lado1.value;
    let valueLado2 = lado2.value;
    let valueBase = Base.value;

    let per =  perimetroTriangulo(valueLado1, valueLado2, valueBase);

    alert('El perimetro del triangulo es: ' + per);

}

function calcularAreaTriangulo(){
    let base = document.getElementById('inputTrianguloBase');
    let altura = document.getElementById('inputTrianguloAltura');
    let valueBase = base.value; 
    let valueAltura = altura.value;

    let areaTrg = areaTriangulo( valueBase, valueAltura) ;

    alert('el area del triangulo es:' + areaTrg);
}


// ------------------- Codigo del Circulo  -------------------
console.group('Circulo');

    const PI = Math.PI;

    function diametroCirculo(radio){
        return  radio * 2;
    }
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio)
        return diametro * PI;
    }
    function areaCirculo (radio){
        return (radio * radio) * PI;
    }

console.groupEnd();
//---------------------------------------------------------------

function calcularPerimetroCirculo(){
    let radio = document.getElementById('inputCirculo');
    let valueRadio = radio.value;

    let  perimetro = perimetroCirculo(valueRadio);
    alert('el perimetro del triangulo es:' + perimetro);
}

function calcularAreaCirculo(){
    let radio = document.getElementById('inputCirculo');
    let valueRadio = radio.value;

    let  area = areaCirculo(valueRadio);
    alert('el area del triangulo es:' + area);
}