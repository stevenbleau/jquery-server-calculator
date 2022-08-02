console.log('client.js sourced');

$(readyNow);

function readyNow(){
    console.log('jquery sourced');
    //Operator button click event
    $('body').on('click', '.operatorBtn', setOperator);
    //equal button click event
    $('body').on('click', '#equalBtn', submit);
    //clear button click event
    $('body').on('click', '#cBtn', clearInputFields);
}
//VARIABLES
let operator;



//LOGIC:

//STORE OPERATOR USED FOR CALCULATION
function setOperator(){
    console.log('in "setOperator"');
}
//CLEAR INPUT FIELDS
function clearInputFields(){
    console.log('in "clearInputFields"');
}
//APPEND CALCULATION HISTORY TO DOM
function showHistory(){
    console.log('in "showHistory');
}

//CREATE OBJECT WITH INPUT, OPERATOR, AND TOTAL PROPERTIES; CALL POST; CLEAR INPUTS; DISPLAY HISTORY
function submit(){
    console.log('in "submit"');
}


//AJAX OPERATIONS:
//1. POST INPUT OBJECT TO SERVER
//2. GET CALCULATION HISTORY

