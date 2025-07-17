
const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');
const body = document.querySelector('#body');
let prev =0;
let op ='';

(function(){
   console.log(buttons);
   buttons.forEach(button => {
     button.classList.add('px-4','py-2','rounded-md');
    });
    
    body.addEventListener('keydown', (e) => {
        if(e.key >= '0' && e.key <= '9'){
            checkInput();
            numberInput(e, e.key);
        } else if(['+', '-', '*', '/', '.'].includes(e.key)){
            checkInput();
            operator(e, e.key);
        } else if(e.key === 'Enter'){
            checkInput();
            operator(e, '=');
        } else if(e.key === 'c' || e.key === 'Backspace'){
            input.value = 0;
            checkInput();
        }
    });

    
})();
function addScaleEffect(e){
    if(e.key){
        return;
    }
    e.classList.add('scale-50','transition','duration-300','ease-in','delay-200');
    
}
function removeScaleEffect(e){
    if(e.key){
       return;
    }
    e.classList.remove('scale-50','transition','duration-300','ease-in','delay-200');
    
}

function checkInput(){
    const inputValue = parseInt(input.value);
    if(inputValue ===0){
        input.classList.add('animate-pulse');
    }else{
        input.classList.remove('animate-pulse');
    }
}


function numberInput(e,num){
    //console.log('Keyboard :'+ e.key);
    if(input.value.substring(0,1) == 0 && input.value.substring(1,2) !='.'){
        input.value =num;
    }else{
        input.value += num;
    }
    checkInput();
    addScaleEffect(e);
    setTimeout(()=>
        {
        removeScaleEffect(e)
        },400);
}
function operator(e, operator){
    addScaleEffect(e);
    setTimeout(()=>
        {
        removeScaleEffect(e)
        },400);
    switch(operator){
        case 'c':
            input.value = 0;
            checkInput();
            break;
        case '/':
            checkInput();
            prev = input.value;
            input.value =0;
            op='/';
            break;
        case '-':
            checkInput();
            prev = input.value;
            input.value =0;
            op='-';
            break;
        case '+':
            checkInput();
            prev = input.value;
            input.value =0;
            op='+';
            break;
        case '*':
            checkInput();
            prev = input.value;
            input.value =0;
            op='*';
            break;
        case '.':
            checkInput();
            input.value += ".";
            break;
        case '=':
            switch(op){
                case '/':
                    input.value = parseFloat(prev)  / parseFloat(input.value); 
                    console.log(prev);
                    break;
                case '*':
                    input.value = parseFloat(prev)  * parseFloat(input.value); 
                    break;
                case '-':
                    input.value = parseFloat(prev)  - parseFloat(input.value); 
                    break;
                case '+':
                    input.value = parseFloat(prev)  + parseFloat(input.value); 
                   break;
            }
            break;
        default:
            break;
    }
}
