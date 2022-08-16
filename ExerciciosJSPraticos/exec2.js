/*Função que recebe o comprimento dos lados de um triangulo, e retorna a sua classificação(ignorando quetões matematicas de um triangulo) */

function triangulo(a, b, c){
    if(a == b && b == c && c == a){
        console.log('Triangulo Equilátero')
    }else if(a == b || b == c || c == a){
        console.log('Triangulo Isósceles')
    }else{
        console.log('Triangulo Escaleno')
    }
}
triangulo(5,3,5)