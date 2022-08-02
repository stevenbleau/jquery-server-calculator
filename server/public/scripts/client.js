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
    let history;
    let calculation = {
        inputOne: 0,
        inputTwo: 0,
        operator: '+',
        answer: 0
}


//LOGIC:

    //STORE OPERATOR USED FOR CALCULATION
    function setOperator(){
        console.log('in "setOperator"');
        operator = $(this).attr('data-operator');
            console.log('the operator selected is ', operator);
    }
    //CLEAR INPUT FIELDS
    function clearInputFields(){
        console.log('in "clearInputFields"');
        $('.inputFields').val('');
    }
    //APPEND CALCULATION HISTORY TO DOM
    function showHistory(){
        console.log('in "showHistory');
        $('#historyList').empty();
        $('#historyList').append(`
            <li>${calculation.inputOne} ${calculation.operator} ${calculation.inputTwo} = ${calculation.answer}</li>
        `);
    }


    //CREATE OBJECT WITH INPUT, OPERATOR, AND TOTAL PROPERTIES; CALL POST; CLEAR INPUTS; DISPLAY HISTORY
    function submit(){
        console.log('in "submit"');
        showHistory();
    }


//AJAX OPERATIONS:
//1. POST INPUT OBJECT TO SERVER
//2. GET CALCULATION HISTORY

