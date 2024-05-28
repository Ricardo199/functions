/* this file receives two integer variables and returns a grid 
Author: Ricardo Burgos
Date: 21/05/2024 (date of last modification)
*/

//grid function
function Grid(a, b) {

    //checking if the variables aren null
   if(isNaN(a) || isNaN(b)){
        alert("please only use numbers");
        a=15;
        b=15;
   }

    //making the variables more understandable
    var row = a, column = b, table = "";
    //nested for to make the table at different paces
    for (var i = 1; i <= row; i++) {
        table += "<tr>";
        for (var j = 1; j <= column; j++) {
            table += "<td class='cell'>" + i + "," + j + "</td>";
        }
        table += "</tr>";
    }
    //making the table in the main html element
    document.getElementById("table").innerHTML = table;
}

//to avoid error this js file is loaded after the main html file is rendered
window.onload = function () {

    //assigning default values of the variables
    let a = 15;
    let b = 15;

    //passing the variables with default values to the Grid method
    Grid(a, b);

    //the submit button
    document.getElementById('submit').onclick = function () {

        //getting the value of the rows and columns given by the user
        var text = document.getElementById("txtQuantity").value;

        //splitting the values by a comma to get two numbers, rows and columns
        const array = text.split(",");

        //making sure the input is a number, place to introduce try catch block
        a = parseInt(array[0]);
        b = parseInt(array[1]);

        //passing the variables to the Grid method
        Grid(a, b);

    };

    //the reset button
    document.getElementById('reset').onclick = function () {

        //setting the variables to their default values 
        a = 15;
        b = 15;

        //sending the values to be rendered as a grid
        Grid(a, b);
    };
};