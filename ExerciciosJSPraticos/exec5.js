function somaDin(a, b, soma){
    soma = a + b
    console.log(`R$ ${soma.toFixed(2).toString().replace('.', ',')}`);
}
somaDin(0.1, 0.2) 