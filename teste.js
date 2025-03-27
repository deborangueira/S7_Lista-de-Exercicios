//Mudar valor
vetor = [0,1,2,3]

vetor[1] = 40

console.log(vetor)

//Mudar valor
vetor = [0,1,2,3]

vetor[4] = 0
vetor[5] = 8

console.log(vetor)

// array e iteração

const cores = ["vermelho", "roxo", "azul"]

for (let i = 0; // em que ítem da lista a iteração começa
      i < cores.length; // enquanto essa condição não for alcançada, a iteração continua a ocorrer
      i++) // segue para o próximo ítem da lista após a ação do {} ter sido realizada
    {console.log("cor", cores[i])} // o que é feito por ciclo de iteração


//Mudar valor
vetor = [0,1,2,3]

vetor.splice (0, // qual o começo
              2, // quantos números a partir dele eu removo
                10) // o que eu coloco no lugar

console.log(vetor)

// acessar um atributo específico

class Carro {
  constructor(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

const carro1 = new Carro ('toyota', 'honda', 2020);
const carro2 = new Carro ('Honda', 'civic', 2020);

const carros = [carro1, carro2];

console.log(carros[0].marca);