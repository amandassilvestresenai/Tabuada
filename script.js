let tabuada = document.querySelector("#mostrar");
mostrar.addEventListener("click", result);

function result() {
    let numero = document.querySelector("#txt1");
    let nummult = "1";

    let n1 = Number(numero.value);
    var mt1 = n1 * 1;
    var mt2 = n1 * 2;
    var mt3 = n1 * 3;
    var mt4 = n1 * 4;
    var mt5 = n1 * 5;
    var mt6 = n1 * 6;
    var mt7 = n1 * 7;
    var mt8 = n1 * 8;
    var mt9 = n1 * 9;
    var mt10 = n1 * 10;
    
    let result = document.querySelector("#result");
    
    result.innerText = `TABUADA DO ${n1}
        ${n1} x 1 = ${mt1}
        ${n1} x 2 = ${mt2}
        ${n1} x 3 = ${mt3}
        ${n1} x 4 = ${mt4}
        ${n1} x 5 = ${mt5}
        ${n1} x 6 = ${mt6}
        ${n1} x 7 = ${mt7}
        ${n1} x 8 = ${mt8}
        ${n1} x 9 = ${mt9}
        ${n1} x 10 = ${mt10}`;
}