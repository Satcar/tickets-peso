const calcular = () => {

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;

    const imc = weight / ((height / 100) ** 2);
    const minImc = 18.5;
    const maxImc = 25;
    const minWeight = minImc * (height / 100) ** 2;
    const maxWeight = maxImc * (height / 100) ** 2;

    let txt = '';

    if ((imc <= minImc) || (imc >= maxImc)) {
        txt = `Con un IMC de ${imc.toFixed(1)}, estas fuera del rango de tu peso ideal. Para tus ${height}cm de altura, tu peso deberia estar entre ${minWeight.toFixed(1)}kg y ${maxWeight.toFixed(1)}kg`
    } else {
        txt = `Con un IMC de ${imc.toFixed(1)}, estas dentro del rango de tu peso ideal`
    }
    

    document.querySelector('#txt').textContent = txt;
    
}