// objetos----------

let amigo = {
  nome:'jose',
  sexo:'M',
  altura:1.80,
  peso:95.5,
  engordar(p=0){
    console.log('engordou')
    this.peso += p
  }
  }

amigo.engordar(5)
console.log(`Meu amigo ${amigo.nome} pesa ${amigo.peso} Kg.`)