let display= document.getElementById("screen")

function show(x){
    display.value+=x;
}

function wipe(){
    display.value=' ';
}

function calc(){
    display.value=eval(display.value)
}