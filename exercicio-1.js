const prompt = require("prompt-sync")();

/* 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit */
let temperaturaGrausCelcius = prompt("Temperatura em graus Celsius: ");

console.log(
  `A temperatura de ${temperaturaGrausCelcius}°C em  Fahrenheit é ${
    temperaturaGrausCelcius * 1.8 + 32
  }°F`
);

/* 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores. */

// const numeroDeEleitores = Number(prompt("Total de eleitores: "));
// const votosEmBranco = Number(prompt("Total dos votos em Branco: "));
// const votosNulo = Number(prompt("Total dos votos em Nulo: "));
// const votosValido = Number(prompt("Total dos votos válido: "));

// console.log(`Votos em branco:,  ${(votosEmBranco / numeroDeEleitores) * 100}%`);
// console.log(`Votos em Nulo:  ${(votosNulo / numeroDeEleitores) * 100}%`);
// console.log(`Votos em Válido:  ${(votosValido / numeroDeEleitores) * 100}%`);

/* 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
 * ● Some 25 ao primeiro inteiro;
 * ● Triplique o valor do segundo inteiro;
 * ● Modifique o valor do terceiro inteiro para 12% do valor original;
 * ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
 */

// const primeiroNumero = parseInt(prompt("Digite um número: "));
// const segundoNumero = parseInt(prompt("Digite o segundo número: "));
// const terceiroNumero = parseInt(prompt("Digite o terceiro número:  "));
// let quartoNumero = parseInt(prompt("Digite o quarto número:  "));

// quartoNumero = primeiroNumero + segundoNumero + terceiroNumero;

// console.log(`${primeiroNumero} + 25 é igual à ${primeiroNumero + 25}`);
// console.log(`${segundoNumero} * 3 é igual à ${segundoNumero * 3}`);
// console.log(
//   `12% de ${terceiroNumero} é igual à ${(12 * terceiroNumero) / 100}`
// );
// console.log(
//   `A soma de ${primeiroNumero}, ${segundoNumero}, ${terceiroNumero} é igual à ${quartoNumero}`
// );

/* 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).
 */

// const primeiraNota = Number(prompt("Digite a primeira nota: "));
// const segundaNota = Number(prompt("Digite a segunda nota: "));

// const media = (primeiraNota + segundaNota) / 2;
// console.log(`Sua média é ${media}`);
// if (media >= 6) console.log(`Parabéns você foi aprovado(a)!`);

/* 5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0
 */

// const primeiraNota = Number(prompt("Digite a primeira nota: "));
// const segundaNota = Number(prompt("Digite a segunda nota: "));

// let media = (primeiraNota + segundaNota) / 2;
// console.log(`Sua média é ${media}`);

// media >= 6
//   ? console.log(`PARABÉNS você foi aprovado(a)!`)
//   : console.log(`você foi REPROVADO(a)!`);

/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
 */

// const ladoA = Number(prompt("Digite o valor do primeiro lado: "));
// const ladoB = Number(prompt("Digite o valor do segundo lado: "));
// const ladoC = Number(prompt("Digite o valor do terceiro lado: "));

// if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
//   if (ladoA !== ladoB && ladoB !== ladoC) {
//     console.log(
//       `As entradas ${ladoA}, ${ladoB} e ${ladoC} formam um Triângulo Escaleno`
//     );
//   } else if (ladoA === ladoB && ladoB === ladoC) {
//     console.log(
//       `As entradas ${ladoA}, ${ladoB} e ${ladoC} formam um Triângulo Equilátero`
//     );
//   } else {
//     console.log(
//       `As entradas ${ladoA}, ${ladoB} e ${ladoC} formam um Triângulo Isósceles`
//     );
//   }
// } else {
//   console.log("Não é possível formar um triângulo");
// }

/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
 */

// const totalMacas = parseInt(prompt("Digite a quantidade de maçãs: "));

// totalMacas < 12
//   ? console.log(`O valor total é R$${totalMacas * 0.3}`)
//   : console.log(`O valor total é R$${totalMacas * 0.25}`);

/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
 */

// const valorA = parseInt(prompt("Digite o primeiro valor: "));
// const valorB = parseInt(prompt("Digite o segundo valor: "));

// valorA < valorB
//   ? console.log(`${valorA} ${valorB}`)
//   : console.log(`${valorB} ${valorA}`);

/* 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:*/

// let codigoDaOrigemDoProduto = parseInt(prompt("Digite código do produto: "));

// if (codigoDaOrigemDoProduto === 1) {
//   console.log("Sul");
// } else if (codigoDaOrigemDoProduto === 2) {
//   console.log("Norte");
// } else if (codigoDaOrigemDoProduto === 3) {
//   console.log("Leste");
// } else if (codigoDaOrigemDoProduto === 4) {
//   console.log("Oeste");
// } else if (codigoDaOrigemDoProduto === 5 || codigoDaOrigemDoProduto === 6) {
//   console.log("Nordeste");
// } else if (codigoDaOrigemDoProduto >= 5 && codigoDaOrigemDoProduto <= 9) {
//   console.log("Sudeste");
// } else if (codigoDaOrigemDoProduto >= 10 && codigoDaOrigemDoProduto <= 20) {
//   console.log("Centro-Oeste");
// } else if (codigoDaOrigemDoProduto >= 25 && codigoDaOrigemDoProduto <= 50) {
//   console.log("Nordeste");
// } else {
//   console.log("Produto importado");
// }

/*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes */

// const numero = parseInt(prompt("Digite Um número: "));

// for (let i = 1; i <= 10; i++) {
//   console.log(`${numero}`);
// }

/*11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO. */

// let condicaoDeParada = true;
// console.log("Para encerrar basta por números negativos, nulo ou letra");
// do {
//   const valor = parseInt(prompt("Digite valor: "));
//   if (isNaN(valor)) {
//     condicaoDeParada = false;
//   } else if (valor >= 0) {
//     valor % 2 === 0 ? console.log("PAR") : console.log("ÍMPAR");
//   }
// } while (condicaoDeParada);

/*12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5. */

// for (let i = 1000; i <= 1999; i++) {
//   if (i % 11 === 5) {
//     console.log(i);
//   }
// }

/* 13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
*/

// for (let i = 1; i <= 5; i++) {
//   const valor = parseInt(prompt("Digite valor: "));
//   for (let j = 1; j <= valor; j++) {
//     console.log(`${j} x ${valor} = ${j * valor}`);
//   }
// }

/*14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

// let valor,
//   soma = 0,
//   contador = 0;

// while (valor !== 0) {
//   contador++;
//   valor = Number(prompt("Digite valor: "));
//   soma += valor;
// }
// console.log(soma / (contador - 1));

/*15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos. */

// let valor,
//   somaValor = 0,
//   somaPeso = 0,
//   contador = 0;

// while (valor !== 0) {
//   valor = Number(prompt("Digite o valor: "));
//   if (isNaN(valor) || valor === "" || valor === true || valor === null) {
//     console.log("Dado Inválido");
//   } else {
//     if (valor !== 0) {
//       peso = Number(prompt("Digite o peso: "));
//       somaValor += valor * peso;
//       somaPeso += peso;
//       contador++;
//     }
//   }
// }
// console.log(somaValor / somaPeso);

/*16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo. */

// let valor = 100,
//   numeroPeloQualValorVaiSerDividido = 0,
//   contadorQuaciente = 0,
//   contadorDePrimos = 0;

// while (contadorDePrimos !== 50) {
//   valor++;
//   while (numeroPeloQualValorVaiSerDividido !== valor) {
//     numeroPeloQualValorVaiSerDividido++;

//     if (valor % numeroPeloQualValorVaiSerDividido === 0) {
//       contadorQuaciente++;
//     }
//     if (
//       numeroPeloQualValorVaiSerDividido === valor &&
//       contadorQuaciente === 2
//     ) {
//       console.log("primo ", valor);
//       contadorDePrimos++;
//     }
//   }
//   contadorQuaciente = 0;
//   numeroPeloQualValorVaiSerDividido = 0;
// }
