// Crie um objeto que receba ao menos três propriedades sobre você.

let eu=["mae","chocolate","gato",];

// Adicione uma nova propriedade sem alterar seu objeto inicial.

eu.unshift("natureza");

// Remova uma propriedade desse objeto.

delete eu[2];

//Mostre no console todas as propriedades desse objeto.

console.log(eu)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro=[{
    nome: "Joao",
    idade: 10,
    telefone: "0101-0101",
    amigos:["Maria","Ale","Alice","vitoria"]
},
{
    nome:"Maria",
    idade:11,
    telefone: "0202-0202",
    amigos: ["Ale","Alice","Joao","vitoria"]
},
{
    nome:"Ale",
    idade:7,
    telefone: "0303-0303",
    amigos:["Alice","Joao","vitoria","Maria"]
},
{
    nome:"Alice",
    idade:8,
    telefone: "0404-0404",
    amigos:["Julia","Ale","Alice","Joao"]
},
{
    nome:"vitoria",
    idade:10,
    telefone: "0505-0505",
    amigos:["Joao","vitoria","Maria","Ale"]
}]

console.log(cadastro)



// Mostre no console o nome de um amigo de cada lista.


