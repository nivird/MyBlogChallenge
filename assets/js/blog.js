//PULL FROM LOCAL STORAGE

//LOOP OVER THE ARRAY

var input1 = sessionStorage.getItem("input1");
var input2 = sessionStorage.getItem("input2");
var input3 = sessionStorage.getItem("input3");
//var input3 = sessionStorage.getItem("input3");


// Display data in result page
document.getElementById("output1").value = input2;
document.getElementById("output2").value = input1;
document.getElementById("output3").value = input3;
document.getElementById("output4").value = input3;


//function to go back to the index page
function goBack()
{
  window.history.back();
}