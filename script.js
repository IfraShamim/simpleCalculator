function appendNumber(num){
document.getElementById("result").value += num;
}
function appendOperator(operator){
    document.getElementById("result").value += operator;
}
function clearResult(){
    document.getElementById("result").value = '';
}
function backspace(){
    let currentDisplay = document.getElementById("result").value;
    document.getElementById("result").value = currentDisplay.slice(0,-1);
}
function calculate(){
    try{
        document.getElementById("result").value = eval(document.getElementById("result").value);
    }
    catch{
        document.getElementById("result").value = "Something went wrong!"; 
    }
}

    