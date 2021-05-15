// vetores arrays

let num = [5,6,8,9,4,1]

/*

console.log(`o vetor num  tem ${num.length} posições`)
console.log(`o vetor em ordem crescente fica assim:${num.sort()}.`)
para acrescentar um numero na ultima posição usaremos o metodo "push"
console.log(`acrescentando 2 ${num.push(2)}`)
num.push(2)
console.log(num)
num.pop
console.log(num)

for (let pos = 0; pos <num.length; pos++) {
  console.log(`a posição ${pos} tem o valor:${num[pos]}`);
  
}
*/ 
for(let pos in num){
  console.log(num[pos])
}

let pos = num.indexOf(5)
//console.log(pos)

if (pos == -1) {
  console.log('valor nao encontrado!!')
} else {
  console.log(`o valor  esta na posição ${pos}`)
}

