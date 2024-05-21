window.onload = function () {

    var a = 15;
    var b = 15;

    Grid(a, b);

    document.getElementById('submit').onclick = function () {

        var text = document.getElementById("txtQuantity").value;

        const array = text.split(",");

        a = parseInt(array[0]);
        b = parseInt(array[1]);

        if (isNaN(a) && isNaN(b)) {
            a = 1;
            b = 1;
        } else {

            if (isNaN(a)) {
                a = 1;
            } else if (isNaN(b)) {
                b = 1;
            }
        }

        Grid(a, b);


        document.getElementById('reset').onclick = function () {
            var a = 15;
            var b = 15;

            Grid(a, b);
        }

    }
}
function Grid(a, b) {
    let row = a;
    let column = b;
    let table = "";
    for (let i = 1; i <= row; i++) {
        table += "<tr>";
        for (let j = 1; j <= column; j++) {
            table += "<td class='cell'>" + i + "," + j + "</td>";
        }
        table += "</tr>";
    }
    document.getElementById("table").innerHTML = table;
}