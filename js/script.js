for (let n=1; n<= 100; n++){
    //console.log(n)
    if( (n % 3 === 0) && (n % 5 === 0) ) {
        //let n = 'Fizz'
        //console.log('Fizz')
        console.log('BuzzFizz')

    } else if( (n % 3 === 0)) {
        //let n = 'buzz'
        console.log('Buzz')

    } else  if( (n % 5 === 0 )) {
       
       // console.log('BuzzFizz')
        console.log('Fizz')

    } else{
        console.log(n)
    }

}