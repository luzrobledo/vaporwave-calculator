let input= document.querySelector('input');

let c= document.getElementById('c');
let result= document.getElementById('result');
let dot= document.getElementById('dot');

let pharentesis_open= document.getElementById('pharentesis-open');
let pharentesis_close= document.getElementById('pharentesis-close');
let division= document.getElementById('division');
let multiplication= document.getElementById('multiplication');
let substract= document.getElementById('substract');
let addition= document.getElementById('addition');


let zero= document.getElementById('zero');
let one= document.getElementById('one');
let two= document.getElementById('two');
let three= document.getElementById('three');
let four= document.getElementById('four');
let five= document.getElementById('five');
let six= document.getElementById('six');
let seven= document.getElementById('seven');
let eight= document.getElementById('eight');
let nine= document.getElementById('nine');



function cleanInput(){
    input.value= '';
}
function resultInput(){
   return input.value= eval(input.value);
}
function percentResult(){
   return input.value
}



c.onclick= cleanInput;
result.onclick= resultInput;

dot.onclick= function(){input.value+='.'};
pharentesis_open.onclick= function(){input.value+='('};
pharentesis_close.onclick= function(){input.value+=')'};
division.onclick= function(){input.value+='/'};
multiplication.onclick= function(){input.value+='*'};
substract.onclick= function(){input.value+='-'};
addition.onclick= function(){input.value+='+'};

zero.onclick= function(){input.value+='0'};
one.onclick= function(){input.value+='1'};
two.onclick= function(){input.value+='2'};
three.onclick= function(){input.value+='3'};
four.onclick= function(){input.value+='4'};
five.onclick= function(){input.value+='5'};
six.onclick= function(){input.value+='6'};
seven.onclick= function(){input.value+='7'};
eight.onclick= function(){input.value+='8'};
nine.onclick= function(){input.value+='9'};