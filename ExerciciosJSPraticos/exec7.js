function bhaskara(ax2, bx, c){
    let resultado = []
    let delta = (bx ** 2) - (4* ax2 *c)
    if(delta < 0){
        console.log('Delta é negativo')
    }else{
        let x1 = (-bx + Math.sqrt(delta)) / 2 * ax2
        let x2 = (-bx - Math.sqrt(delta)) / 2 * ax2
        resultado.push(x1)
        resultado.push(x2)
        console.log(resultado)
    }
}

bhaskara(3,-5,12)
bhaskara(1,3,2)