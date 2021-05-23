const num = 7

function fizbus() {
  if (num%3==0 && num%5 == 0) {
    console.log('FizzBuzz')
  } else if (num%3==0) {
    console.log('fizz')
  }else if (num%5==0) {
    console.log('buzz')
  } else{
    console.log(`O numero ${num} nao é divisivel por 3 e 5. Digite outro numero !`)
  }
}


fizbus()