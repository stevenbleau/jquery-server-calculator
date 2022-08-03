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
        operator: '',
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
    function showHistory(history){
        console.log('in "showHistory');
        $('#historyList').empty();
        for(let i = 0; i<history.length; i++){
            $('#historyList').append(`
                <li>${history[i].inputOne} ${history[i].operator} ${history[i].inputTwo} = ${history[i].answer}</li>
            `);
        }
    
    }


    //UPDATE CALCULAION OBJECT WITH SUBMISSIONS
    function submit(){
        console.log('in "submit"');
        calculation.inputOne = $('#firstNum').val();
        calculation.inputTwo = $('#secondNum').val();
        calculation.operator = operator;
        //call ajax post
        postInputs();
        //call ajax get
        getHistory();
        clearInputFields();
    }


//AJAX OPERATIONS:
    //1. POST INPUT OBJECT TO SERVER
    function postInputs(){
        console.log('in "postInputs"');
        $.ajax({
            type: 'POST',
            url: '/inputs',
            data:
            {
                inputOne: calculation.inputOne,
                inputTwo: calculation.inputTwo,
                operator: calculation.operator,
                answer: calculation.answer
            }
        });
    }
    //2. GET CALCULATION HISTORY
    function getHistory(){
        console.log('in "getHistory"');
        $.ajax({
            type: 'GET',
            url: '/history',
        }).then(function (response) {
            console.log('the history receieved: ', response);
            showHistory(response);
        });
    }

