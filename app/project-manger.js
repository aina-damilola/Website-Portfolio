let elements = document.querySelectorAll('.con-b-a');

let elements_2 = document.querySelectorAll('.con-dami');

function show(button){
    
    for(let i = 0; i < elements.length; i++){
        if(button-1 != i){
            if(elements[i].classList.contains('open')){
                elements[i].classList.remove('open')
                elements[i].classList.add('close')

            }
            if(elements_2[i].classList.contains('show')){
               

                elements_2[i].classList.remove('show')
                elements_2[i].classList.add('show-r')
            }
        }
        
    }
    
    if(elements[button-1].classList.contains('close')){
        elements[button-1].classList.remove('close')
     
    }
    if(elements_2[button-1].classList.contains('show-r')){
        elements_2[button-1].classList.remove('show-r')
    }
    elements[button-1].classList.add('open')
    elements_2[button-1].classList.add('show')
    
}

