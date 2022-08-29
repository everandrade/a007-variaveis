const nome = " "
console.log(nome)

let idade = " "
console.log(idade)

console.log(typeof nome)
console.log(typeof idade)

/*Esse tipo de variável foi impressa devido a não haver atribuído valores,
por isso foi colocado o espaço entre aspas, 
o que fez o programa entender como duas strings.
*/


const nomePrompt = prompt('Qual é seu nome?')
console.log(nomePrompt)

let idadePrompt = prompt('Qual a sua idade?')
console.log(idadePrompt)

console.log(typeof nomePrompt)
console.log(typeof idadePrompt)

/*Foi solicitado o preenchimento das variáveis,
mas ainda se mantém como strings.
*/

console.log("Olá, ", nomePrompt, " você tem ", idadePrompt, " anos.")
