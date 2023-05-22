let square =document.getElementById('onscreen');

for (let n=1; n<= 100; n++){
    let content = document.createElement('div');
    content.classList.add('square')
    
    if( (n % 3 === 0) && (n % 5 === 0) ) {
        content.classList.add('f-b');
        content.innerText = 'FizzBuzz'
        
    } else if( (n % 3 === 0)) {
        content.classList.add('fz');
        content.innerText = 'Fizz'

    } else  if( (n % 5 === 0 )) {
        content.classList.add('bz');
        content.innerText = 'Buzz'

    } else{
        content.classList.add('n');
        content.innerText =`${n}`
       
    }
    
    square.append(content)
}