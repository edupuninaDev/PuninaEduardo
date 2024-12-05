class Suma {
    constructor ( num1, num2 ) {
        this.num1 = num1;
        this.num2 = num2;
    };

    sumar() {
        return this.num1 + this.num2;
    }
    
}
function sumaNumero() {
    var num1 = parseInt( document.getElementById( "txtPrimerNumero" ).value );
    var num2 = parseInt( document.getElementById( "txtSegundoNumero" ).value );
    //var suma = num1 + num2;
    var obj = new Suma( num1, num2 );
    document.getElementById( "total" ).innerText = "La suma es: " + obj.sumar();
}       