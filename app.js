let arrayCaro = [];

function assimentElementToArray() {
    for (let i = 0; i < 5; i++) {
        arrayCaro[i] = new Array();
        for (let j = 0; j < 5; j++) {
            arrayCaro[i][j] = "O ";
        }
    }
    showResult();
}

window.onload = assimentElementToArray();

function changeValue() {
    let row = parseInt(document.getElementById("value-row").value);
    console.log(row);
    let col = parseInt(document.getElementById("value-col").value);
    console.log(col);
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (i == row && j == col) {
                arrayCaro[i][j] = "X ";
            }
        }
    }
    console.log(arrayCaro);
    showResult();
}

function showResult() {
    let textTable = "";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            textTable += arrayCaro[i][j];
        }
        textTable += "<br>"
    }
    document.getElementById("content").innerHTML = textTable;
}
