const display=document.getElementById('display');
function appendToDisplay(input){
    display.value=display.value+input;
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="error";
    }
} 
function clearDisplay(){
        display.value="";
}
function de(){
    display.value=display.value.toString().slice(0,-1);
}