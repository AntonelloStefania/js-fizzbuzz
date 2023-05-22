let square =document.getElementById('onscreen');
for (let n=1; n<= 100; n++){
    
    if( (n % 3 === 0) && (n % 5 === 0) ) {
       
        console.log('BuzzFizz')
        square.innerHTML += '<div>FizzBuzz</div>'
        
    } else if( (n % 3 === 0)) {
       
        square.innerHTML += '<div>Fizz</div>'

        console.log('Fizz')

    } else  if( (n % 5 === 0 )) {
      
       
       
        console.log('Buzz')
        square.innerHTML += '<div>Buzz</div>'

    } else{
        console.log(n)
       
    }
    

}