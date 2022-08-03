const express = require('express');
const app = express();
const PORT = 5000;

// This is how our index.html appears
app.use(express.static('server/public'));
app.use(express.urlencoded());



//VARIABLES
let history = [];



//LOGIC:

//PERFORM CALCULATIONS
    function calculate(input){
        console.log('in "calculate"');
        if (input.operator === '+'){
            input.answer = Number(input.inputOne) + Number(input.inputTwo);
            console.log('The answer is ', input.answer);
            history.push(input);
        }
        else if (input.operator === '-'){
            input.answer = Number(input.inputOne) - Number(input.inputTwo);
            console.log('The answer is ', input.answer);
            history.push(input);
        }
        else if (input.operator === '*'){
            input.answer = Number(input.inputOne) * Number(input.inputTwo);
            console.log('The answer is ', input.answer);
            history.push(input);
        }
        else if (input.operator === '/'){
            input.answer = Number(input.inputOne) / Number(input.inputTwo);
            console.log('The answer is ', input.answer);
            history.push(input);
        }
    }
    


//AJAX OPERATIONS:
    //1. RECEIVE POST INPUT OBJECT AND ADD TO ARRAY
    app.post('/inputs', (req,res) => {
        console.log(req.body);
        calculate(req.body);

    });
    //2. SEND CALCULATION HISTORY
    app.get('/history',(req,res)=>{
        res.send(history);
    });






app.listen(PORT, () => {
    console.log('listening on port', PORT)
});