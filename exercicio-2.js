const prompt = require("prompt-sync")();

function media(value) {
  let sum = 0;
  value.forEach((element) => (sum += element));
  return +(sum / value.length).toFixed(2);
}
function sumElement(array) {
  return array.reduce((acc, element) => acc + element, 0);
}

function sumRows(matrix) {
  let sumOfAllElements = [];
  for (let row = 0; row < matrix.length; row++) {
    sumOfAllElements[row] = sum(matrix[row]);
  }
  return sumOfAllElements;
}

function getTranspose(mainMatrix) {
  let transpose = [];
  for (let index = 0; index < mainMatrix[0].length; index++) {
    let transposeRow = [];
    mainMatrix.forEach((row) => {
      transposeRow.push(row[index]);
    });
    transpose.push(transposeRow);
  }
  return transpose;
}

function showOrganizedMatrix(matrix) {
  matrix.forEach((linha) => {
    console.log(
      `[${linha
        .map((e) => e.toFixed(2).toString().padStart(6, " "))
        .join(" |")} ]`
    );
  });
}

function simpleRandomElement(maximumValue = 10) {
  return Math.floor(Math.random() * maximumValue) + 1;
}

function randomElementNegative(negative) {
  return negative
    ? Math.floor(Math.random() * 201) - 100
    : Math.floor(Math.random() * 201);
}

/** rows: valor inteiro da quantidade de linhas;
 *  columns: valor inteiro da quantidade de colunas;
 *  negative (valor opcional): true para valores negativos, false para apenas positivos;
 *  integerOrDecimal(valor opcional): 0 apenas inteiro e 1 decimal e inteiro
 * valorMaximosimpleRandom: gerar elementos na matriz até o valor indicado
 */
function randomizeMatrix(
  rows,
  columns,
  negative = false,
  integerOrDecimal = 0,
  valorMaximosimpleRandom
) {
  let matrix = [];
  for (let row = 0; row < rows; row++) {
    let matrixRow = [];
    for (let col = 0; col < columns; col++) {
      let element = negative
        ? randomElementNegative(negative)
        : simpleRandomElement(valorMaximosimpleRandom);
      if (integerOrDecimal === 1) {
        element = randomizeIntegersOrDecimals(element);
      }
      matrixRow.push(element);
    }
    matrix.push(matrixRow);
  }
  return matrix;
}

function randomizeIntegersOrDecimals(element) {
  const decimalControl = Math.random();

  if (decimalControl < 0.5) {
    return +(element + Math.random()).toFixed(2);
  } else {
    return Math.floor(element);
  }
}

console.log('Sem validações do 1 até o 49')

/*1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias. */

// let numberOfCigarettesPerDay = +prompt("Quantos cigarros por dia você fuma? ");
// let yearsOfSmoking = +prompt("Há quantos anos você fuma? ");
// let lostYears =
//   (numberOfCigarettesPerDay * 10 * (yearsOfSmoking * 365)) / (24 * 60);
// console.log(
//   `Você perdeu ${lostYears.toFixed(2)} dias de vida ao longo desses ${yearsOfSmoking} anos fumando`
// );

/*2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */

// let carSpeed = +prompt("Qual a velocidade do carro? Km/h ");

// console.log(carSpeed > 80 && `O proprietário desse carro, foi multado em R$ ${(carSpeed - 80) * 5}`)

/*3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. */

// let distanceToBeCovered = +prompt(
//   "Qual a distancia que você deseja percorrer? km "
// );
// console.log(
//   distanceToBeCovered <= 200
//     ? `A passagem para a distancia ${distanceToBeCovered}km custa R$ ${
//         (distanceToBeCovered * 0.5).toFixed(2)
//       }`
//     : `A passagem para a distancia ${distanceToBeCovered}km custa R$ ${
//       (distanceToBeCovered * 0.45).toFixed(2)
//     }`
// );

/*4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois. */

// const sideA = Number(prompt("Digite o valor do primeiro lado: "));
// const sideB = Number(prompt("Digite o valor do segundo lado: "));
// const sideC = Number(prompt("Digite o valor do terceiro lado: "));

// if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
//   console.log('Os lados fornecidos formam um triângulo')
// } else{
//   console.log('Os lados fornecidos NÃO formam um triângulo')

// }

/*5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura) */

// console.log(`-------- Jokenpo --------`);
// console.log(`Número 1: para Pedra ✊`);
// console.log(`Número 2: para Papel ✋`);
// console.log(`Número 3: para Tesoura ✌️`);
// console.log(`-------------------------`);

// const options = ["✊", "✋", "✌️"];
// const machine = Math.floor(Math.random() * 3) + 1;
// let userChoice;

// while (true) {
//   userChoice = parseInt(prompt("Escolha uma opção (1, 2 ou 3): "));
//   if (userChoice >= 1 && userChoice <= 3) {
//     break;
//   }
//   console.log("Escolha inválida. Por favor, escolha 1 para Pedra, 2 para Papel ou 3 para Tesoura.");
// }

// const machineChoice = options[machine - 1];
// const userSelected = options[userChoice - 1];

// if (machine === userChoice) {
//   console.log(`${userSelected}  x ${machineChoice}`);
//   console.log("Empate!");
// } else if (
//   (machine === 1 && userChoice === 2) ||
//   (machine === 2 && userChoice === 3) ||
//   (machine === 3 && userChoice === 1)
// ) {
//   console.log(`${userSelected}  ganha de ${machineChoice}`);
//   console.log("Você ganhou!");
// } else {
//   console.log(`${machineChoice}  ganha de ${userSelected}`);
//   console.log("Você perdeu!");
// }

/*6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */
// const machine = Math.floor(Math.random() * 5) + 1;
// let user = 0;
// user = +prompt("Tente descobrir qual número de 1 à 5 estou pensando... ");
// while (user !== machine) {
//   if (machine > user) {
//     user = +prompt("Maior: ");
//   } else {
//     user = +prompt("Menor: ");
//   }
// }
// console.log("Aeeeeh");

/*7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
 */

// const dataForChargingCarRental = [
//   { type: "Carro popular", upTo100km: 0.2, over100km: 0.1 },
//   { type: "Carro de luxo", upTo200km: 0.3, over200km: 0.25 },
// ];

// const typeOfCar = prompt("Qual o tipo de carro (L: luxo e P: popular)? ");
// const rentalDays = +prompt("Quantos dias de aluguel? ");
// const kmTraveled = +prompt("Quantos km percorrido? ");

// let pricePerDay = 0;
// let pricePerKm = 0;

// if (typeOfCar.toUpperCase() === "P") {
//   pricePerDay = 90;
//   pricePerKm =
//     kmTraveled <= 100 ? dataForChargingCarRental[0].upTo100km : dataForChargingCarRental[0].over100km;
// } else if (typeOfCar.toUpperCase() === "L") {
//   pricePerDay = 150;
//   pricePerKm =
//     kmTraveled <= 200 ? dataForChargingCarRental[1].upTo200km : dataForChargingCarRental[1].over200km;
// }

// const totalPrice = pricePerDay * rentalDays + pricePerKm * kmTraveled;

// console.log(`O preço total a ser pago é R$ ${totalPrice.toFixed(2)}`);

/*8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. */

// const hoursOfActivity = +prompt(
//   "Quantas horas de atividade por mês foram praticadas? "
// );

// function pointsPerHour(hours, points) {
//   return hours * points;
// }
// function hourlyActivityCalculation(points) {
//   return points * 0.05;
// }

// if (hoursOfActivity <= 10) {
//   const points = pointsPerHour(hoursOfActivity, 2);
//   console.log(
//     `Você ganhou ${points} pontos, totalizando em R$ ${hourlyActivityCalculation(
//       points
//     ).toFixed(2)}`
//   );
// } else if (hoursOfActivity > 10 && hoursOfActivity <= 20) {
//   const points = pointsPerHour(hoursOfActivity, 5);
//   console.log(
//     `Você ganhou ${points} pontos, totalizando em R$ ${hourlyActivityCalculation(
//       points
//     ).toFixed(2)}`
//   );
// } else if (hoursOfActivity > 20) {
//   const points = pointsPerHour(hoursOfActivity, 10);
//   console.log(
//     `Você ganhou ${points} pontos, totalizando em R$ ${hourlyActivityCalculation(
//       points
//     ).toFixed(2)}`
//   );
// }

/*9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário. */
// let stop = "";
// let salary = 0;
// let gender = "";

// const data = [{ F: 0 }, { M: 0 }];

// do {
//   salary = +prompt("Salário do funcionário: R$ ");
//   gender = prompt(
//     "Genero do funcionário (M: masculino | F: Feminino): "
//   ).toUpperCase();
//   stop = prompt("Deseja parar? (S: sim | N: não): ").toUpperCase();
//   console.log("\n");

//     if (gender === "F") {
//       data[0].F += salary;
//     } else {
//       data[1].M += salary;
//     }

// } while (stop !== "S");

// console.log(
//   `Total do salário ganho pelas mulheres R$ ${data[0].F.toFixed(2)} \nTotal do salário ganho pelos homens R$ ${data[1].M.toFixed(2)}`
// );

/*10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

// let stop,
//   sum = 0,
//   acc = 0,
//   smaller,
//   even = [];

// do {
//   const number = +prompt("Digite um número: ");

//   if (!isNaN(number)) {
//     sum += number;

//     if (acc === 0) {
//       smaller = number;
//     } else if (number < smaller) {
//       smaller = number;
//     }

//     if (number > 0 && number % 2 === 0) {
//       even.push(number);
//     }

//     acc++;
//     stop = prompt("Deseja parar? (S: sim | N: não): ").toUpperCase();
//   }
//   console.log("");
// } while (stop !== "S");
// console.log(`A soma de todos os valores são: ${sum}`);
// console.log(`Menor de todos os valores é: ${smaller}`);
// console.log(`A média entre todos os valores é: ${(sum / acc).toFixed(2)}`);
// console.log(`Quandade de valores pares: ${even.length}`);

/*11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência. */
// let stop = 1,
//   pa = [];

// const firstTerm = +prompt("Qual o primeiro termo? ");
// const rate = +prompt("Qual a razão da progressão? ");

// while (stop !== 11) {
//   if (stop === 1) {
//     pa.push(firstTerm);
//   } else {
//     pa.push(firstTerm + (stop - 1) * rate);
//   }
//   stop++;
// }
// console.log(`\nOs 10 primeiros elementos da PA é ${pa}... \nA soma desses elementos é ${pa.reduce((acc, curr) => acc + curr)}`);

/*12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */

// let fibonacci = [];

// for (let i = 1; i < 10; i++) {
//   if (i === 1) {
//     fibonacci.push(i);
//     fibonacci.push(i);
//   } else {
//     fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
//   }
// }
// fibonacci.forEach((e) => console.log(e))

/*13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci. */

// let fibonacci = [];

// for (let i = 0; i < 15; i++) {
//   if (i < 2) {
//     fibonacci.push(i);
//   } else {
//     fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
//   }
// }

// fibonacci.forEach((e) => console.log(e));

/*14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados */

// let names = [];
// for (let i = 0; i < 7; i++) {
//   names.push(prompt(`Qual o ${i+1}º nome? `));
// }
// console.log("\n", names.reverse().join(" "));

/*15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.
 */

// let numbers = [];
// for (let i = 0; i < 10; i++) {
//   numbers.push(parseInt(prompt(`Digite o ${i+1}º número: `)));
// }
// console.log()
// numbers.forEach((number, index) => {
//   if (number % 2 === 0) {
//     console.log(`Número ${number} na posição ${index} é par`);
//   }
// });

/*16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
 */
// const arrayWithRandomNumbers = [];

// for (let i = 1; i <= 20; i++) {
//   arrayWithRandomNumbers.push(Math.floor(Math.random() * 100));
// }
// arrayWithRandomNumbers.forEach((number) => console.log(number));
// console.log();
// const ordainedNumbers = arrayWithRandomNumbers.slice().sort((a, b) => a - b);
// ordainedNumbers.forEach((number) => console.log(number));

// const arrayWithRandomNumbers = [];

// for (let i = 1; i <= 20; i++) {
//   arrayWithRandomNumbers.push(Math.floor(Math.random() * 100));
// }

// console.log("Números gerados:");
// console.log(arrayWithRandomNumbers.join(" "));

// const ordainedNumbers = arrayWithRandomNumbers.slice().sort((a, b) => a - b);

// console.log("\nNúmeros ordenados:");
// console.log(ordainedNumbers.join(" "));

/*17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade */

// let names = [];
// let ages = [];

// for (let i = 1; i < 10; i++) {
//   names.push(prompt(`Digite o ${i}º nome: `));
//   ages.push(
//     parseInt(prompt(`Digite a idade correspondente ao nome anterior: `))
//   );
// }

// console.log("\nAs pessoas menores de idade são:");
// ages.forEach((age, i) => {
//   if (age < 18) {
//     console.log(`${names[i]} - ${ages[i]} anos`);
//   }
// });

/*18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
 um funcionário e ao final escreva o conteúdo do registro. */

// const employees = [];

// const employee = {
//   name: prompt("Nome do funcionário: "),
//   position: prompt("Cargo do funcionário: "),
//   salary: +prompt("Salário do funcionário: ")
// };

// employees.push(employee);

// for (const emp of employees) {
//   for (const key in emp) {
//     console.log(${key} : ${emp[key]});
//   }
// }

/* 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
 repetição. Escrever cada um deles no formato HH.MM.SS */

// function validateHour(hour) {
//   return hour >= 0 && hour <= 23;
// }

// function validateMinuteSecond(time) {
//   return time >= 0 && time <= 59;
// }

// const schedules = [];

// for (let i = 0; i < 5; i++) {
//   let valid = false;

//   while (!valid) {
//     let schedule = {
//       hour: parseInt(prompt("Qual a hora? ")),
//       minute: parseInt(prompt("Qual o minuto? ")),
//       second: parseInt(prompt("Qual o segundo? ")),
//     };
//     if (
//       validateHour(schedule.hour) &&
//       validateMinuteSecond(schedule.minute) &&
//       validateMinuteSecond(schedule.second)
//     ) {
//       schedules.push(schedule);
//       valid = true;
//     } else {
//       console.log(
//         "Horário inválido (hora: de 00 a 23, minuto: de 00 a 59 e segundo: de 00 a 59)"
//       );
//     }
//     console.log();
//   }
// }

// for (const schedule of schedules) {
//   const { hour, minute, second } = schedule;
//   console.log(
//     `${hour.toString().padStart(2, "0")}.${minute
//       .toString()
//       .padStart(2, "0")}.${second.toString().padStart(2, "0")}`
//   );
// }

/* 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
 no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
 salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
 tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
 Matrícula:
 Nome:
 Salário bruto:
 Dedução INSS:
 Salário líquido:
 (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
 INSS) */

//  const officials = [];

//  for (let i = 0; i < 80; i++) {
//    const officer = {
//      matricula: i + 1,
//      nome: `Funcionário  ${i + 1}`,
//      salarioBruto: Math.floor(Math.random() * (10000 - 2000 + 1)) + 2000
//    };

//    officials.push(officer);
//  }

// officials.forEach((officer) => {
//   const { matricula, nome, salarioBruto } = officer;
//   const deducaoINSS = 0.12 * salarioBruto;
//   console.log('\n----- Folha mensal de pagamento -----')
//   console.log(
//     `Matrícula: ${matricula} \nNome: ${nome} \nSalário bruto: ${salarioBruto}\nDedução INSS: ${deducaoINSS} \nSalário líquido: ${
//       (salarioBruto - deducaoINSS).toFixed(2)
//     }`
//   );

// });

/*21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */

// const alt = +prompt("Altura: ");
// const gender = prompt(
//   "Genero (F de feminino ou M de masculino): "
// ).toLocaleUpperCase();
// switch (gender) {
//   case "F":
//     idealPedo = 62.1 * alt - 44.7;
//     break;
//   case "M":
//     idealPedo = 72.7 * alt - 58;
//     break;
//   default:
//     console.log("Dado inválido");
//     break;
// }

// console.log("O peso ideal é ", idealPedo.toFixed(2));

/*22. A prefeitura de uma cidade fez uma pesquisar entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a média
do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00. */

// function highestSalary(value) {
//   let highest = value[0];
//   value.filter((element) => {
//     if (element > highest) {
//       highest = element;
//     }
//     return highest;
//   });
//   return highest.toFixed(2);
// }

// function salaryBelow350(value) {
//   const below350 = value.filter((element) => element <= 350);
//   return ((below350.length / value.length) * 100).toFixed(2);
// }

// let stop = true,
//   salaries = [],
//   numberOfChildren = [];
// do {
//   salaries.push(+prompt("Qual o salário? R$"));
//   numberOfChildren.push(parseInt(prompt("Quantidade de filhos: ")));
//   continueInput = prompt("Tem mais pessoas? (N para parar) ").toUpperCase();
//   if (continueInput === "N") {
//     stop = false;
//   }
//   console.log();
// } while (stop);

// console.log("Média do salário: R$", media(salaries));
// console.log("Maior salário: R$", highestSalary(salaries));
// console.log("Média dos filhos: ", media(numberOfChildren));
// console.log(
//   "O percentual de pessoas com salário até R$ 350,00 é: R$",
//   salaryBelow350(salaries)
// );

/*23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos. */

// let identityMatrix = [];

// for (let i = 0; i < 7; i++) {
//   let row = [];
//   for (let j = 0; j < 7; j++) {
//     if (i === j) {
//       row.push(1);
//     } else {
//       row.push(0);
//     }
//   }
//   identityMatrix.push(row);
// }

// showOrganizedMatrix(identityMatrix);

/* 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
 quantidade de elementos negativos da linha correspondente de M */

// let c = [],
//   matrix = randomizeMatrix(6, 8, true);

// matrix.forEach((row) => {
//   c.push(row.filter((element) => element < 0).length);
// });

// showOrganizedMatrix(matrix);

// c.forEach((element, index) =>
//   console.log(`Na linha ${index + 1} tem ${element} números negativos`)
// );

/* 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
 de cada coluna separadamente. */

// const matrix = randomizeMatrix(15, 20, true, 1);

// showOrganizedMatrix(matrix);
// console.table(matrix);

// for (let index = 0; index < matrix[0].length; index++) {
//   let sum = 0;
//   matrix.forEach((row) => {
//     sum += row[index];
//   });
//   console.log(
//     `A soma dos elementos da coluna ${index + 1} são ${sum.toFixed(2)}`
//   );
// }

// /*26. Dadas duas matrizes numéricas A[1.3,1.5] e B[1.5, 1.3], calcular a matriz produto */

// const matrixA = randomizeMatrix(3, 5),
//   matrixB = randomizeMatrix(5, 3),
//   matrixBInverted = getTranspose(matrixB);

// let productMatrix = [];

// for (let rowIndex = 0; rowIndex < matrixA.length; rowIndex++) {
//   let resultRow = [];
//   for (let colIndex = 0; colIndex < matrixA.length; colIndex++) {
//     let currentRow = matrixA[rowIndex];

//     for (
//       let invertedRowIndex = 0;
//       invertedRowIndex < matrixBInverted.length;
//       invertedRowIndex++
//     ) {
//       let multiplicationResult = currentRow.map((element, index) => {
//         return element * matrixBInverted[invertedRowIndex][index];
//       });

//       if (colIndex === 0) {
//         resultRow.push(
//           multiplicationResult.reduce((total, element) => total + element)
//         );
//       }
//     }
//   }
//   productMatrix.push(resultRow);
// }
// console.table(matrixA);
// console.table(matrixB);
// console.log("Matriz produto: ");
// showOrganizedMatrix(productMatrix);

/*  27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
 multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
 um vetor V(36). Escrever o vetor V no final.*/

// const matrixA = randomizeMatrix(6, 6);
// let v = [];
// let a = +prompt("Digite um valor para multiplicar pela matriz: ");

// for (let row = 0; row < matrixA.length; row++) {
//   for (let col = 0; col < matrixA[0].length; col++) {
//     v.push(matrixA[row][col] * a);
//   }
// }

// showOrganizedMatrix(matrixA);
// console.log(
//   `Aqui está seu vetor V de tamanho ${
//     v.length
//   } resultante da multiplicação de seu valor ${a} pelos valores da Matriz:\n${v.join(
//     " "
//   )}`
// );

/* 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
 item:
 a) a soma dos elementos acima da diagonal principal;
 b) a soma dos elementos abaixo dadiagonal principal; */

// const matrixB = randomizeMatrix(10, 10);
// let elementsAboveMainDiagonal = [],
//   elementsBelowMainDiagonal = [];

// for (let row = 0; row < matrixB.length; row++) {
//   for (let column = 0; column < matrixB[0].length; column++) {
//     if (row > column) {
//       elementsBelowMainDiagonal.push(matrixB[row][column]);
//     } else if (column > row) {
//       elementsAboveMainDiagonal.push(matrixB[row][column]);
//     }
//   }
// }

// showOrganizedMatrix(matrixB);
// console.log(
//   `\nOs elementos ACIMA da diagonal principal são ${elementsAboveMainDiagonal.join(
//     " "
//   )}, sendo a soma desses ${elementsAboveMainDiagonal.reduce(
//     (acc, element) => acc + element
//   )}.`
// );
// console.log(
//   `Os elementos ABAIXO da diagonal principal são  ${elementsBelowMainDiagonal.join(
//     " "
//   )}, sendo a soma desses ${elementsBelowMainDiagonal.reduce(
//     (acc, element) => acc + element
//   )}.`
// );

/* 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
 a) da linha 4 de M;
 b) da coluna 2 deM;
 c) da diagonal principal;
 d) todos os elementos da matriz M.
 Escrever essas somas e a matriz */

//  let sumOfRow4 = 0,
//  sumOfColumn2 = 0,
//  sumOfMainDiagonal = 0,
//  sumOfAllElements = 0;

// const matrix = randomizeMatrix(5, 5);
// for (let row = 0; row < matrix.length; row++) {
//  sumOfRow4 = matrix[3].reduce((acc, element) => acc + element);
//  sumOfColumn2 += matrix[row][1];
//  sumOfMainDiagonal += matrix[row][row];
//  sumOfAllElements += matrix[row].reduce(
//    (acc, element) => acc + element
//  );
// }
// showOrganizedMatrix(matrix)
// console.log("Soma da linha 4: ", sumOfRow4);
// console.log("Soma da coluna 2: ", sumOfColumn2);
// console.log("Soma da diagonal principal: ", sumOfMainDiagonal);
// console.log("Soma de todos os elementos da matriz M: ", sumOfAllElements);

/*30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
 contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
 e os vetores criados */

// const matrix = randomizeMatrix(5, 5);
// let SL = sumRows(matrix),
//   SC = sumRows(getTranspose(matrix));

// showOrganizedMatrix(matrix);
// console.log("\nSoma das linhas:", SL);
// console.log("Soma das colunas: ", SC);

/*31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
 Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
 todos os elementos de V diferentes de A. Mostre os resultados. */

// const matrix = randomizeMatrix(30, 30);
// const integerNumberA = parseInt(prompt("Digite um número inteiro de 1 à 10: "));

// let equalValuesToA = 0,
//   matrixX = [];
// for (let row = 0; row < matrix.length; row++) {
//   let rowX = [];
//   for (let column = 0; column < matrix[0].length; column++) {
//     if (matrix[row][column] === integerNumberA) {
//       equalValuesToA++;
//       rowX.push("-");
//     } else {
//       rowX.push(matrix[row][column]);
//     }
//   }
//   matrixX.push(rowX);
// }
// console.log("Matriz de entrada: ");
// showOrganizedMatrix(matrix);
// console.log("\nMatriz resultante:");
// showOrganizedMatrix(matrixX);
// console.log(`\nTêm ${equalValuesToA} valores iguais à ${integerNumberA}`);

/*32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
 cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
 matriz lida e a modificada */

// let matrix = randomizeMatrix(12, 13, true),
//   matrixAbs = [];

// for (let row = 0; row < matrix.length; row++) {
//   const elementAbs = matrix[row].map((element) => Math.abs(element));
//   let maiorValor = Math.max.apply(null, elementAbs);
//   const linhaDivididaPeloMaior = elementAbs.map((element) =>
//     (element / maiorValor).toFixed(2)
//   );
//   matrixAbs.push(linhaDivididaPeloMaior);
// }

// console.log("Matriz lida: ");
// showOrganizedMatrix(matrix);
// console.log("\nMatriz Modificada: ");
// showOrganizedMatrix(matrixAbs);

/* 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
 elementos da diagonal principal com a média dos elementos da diagonal secundária. */
//  const matrix = randomizeMatrix(3, 3);
//  let secondaryDiagonal = [],
//      mainDiagonal = [];

//  for (let row = 0; row < matrix.length; row++) {
//    for (let col = 0; col < matrix[0].length; col++) {
//      if (row + col === matrix.length - 1) {
//        secondaryDiagonal.push(matrix[row][col]);
//      }
//      if (row === col) {
//        mainDiagonal.push(matrix[row][col]);
//      }
//    }
//  }

//  showOrganizedMatrix(matrix);
//  console.log('\nDiagonal principal X a média da diagonal secundária é',
//    mainDiagonal.map((element) => (element * media(secondaryDiagonal)).toFixed(2)).join(', ')
//  );
/*34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
 cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
 multiplicações. */

//  const matrix = randomizeMatrix(3, 3, true, 1);

//  showOrganizedMatrix(matrix);

//  let alteredMatrix = [];

//  for (let row = 0; row < matrix.length; row++) {
//    const alteredRow = matrix[row].map(
//      (element) => element * matrix[row][row]
//    );
//    alteredMatrix.push(alteredRow);
//  }
//  console.log('\nMatriz alterada: ');
//  showOrganizedMatrix(alteredMatrix);

/* 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
 conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
 estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
 vetor pode ser preenchido quantas vezes forem necessárias. */
// const evenNumbers = [0, 0, 0, 0, 0],
//   oddNumbers = [0, 0, 0, 0, 0];
// let evenCounter = 0,
//   oddCounter = 0;

// for (let i = 0; i < 30; i++) {
//   const value = parseInt(prompt("Digite um valor inteiro: "));

//   if (value % 2 === 0) {
//     evenNumbers.splice(evenCounter, 1, value);
//     evenCounter++;
//   } else {
//     oddNumbers.splice(oddCounter, 1, value);
//     oddCounter++;
//   }

//   if (evenCounter === 5) {
//     console.log(evenNumbers);
//     evenCounter = 0;
//   } else if (oddCounter === 5) {
//     console.log(oddNumbers);
//     oddCounter = 0;
//   }
// }

// if (evenCounter > 0) {
//   console.log("Vetor de pares (restantes):", evenNumbers.slice(0, evenCounter));
// }

// if (oddCounter > 0) {
//   console.log("Vetor de ímpares (restantes):", oddNumbers.slice(0, oddCounter));
// }

/* 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
 um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
 do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
 número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
 o número do apostador e onúmerodeacertos.Seoapostadortiver 13 acertos, mostrar a
 mensagem"Parabéns, tu foi o GANHADOR". */

// let answerSheet = [];
// let bettors = [
//   {
//     cardNumber: 1,
//     answers: [3, 41, 67, 92, 8, 72, 54, 23, 15, 37, 49, 29, 84],
//   },
//   {
//     cardNumber: 2,
//     answers: [14, 86, 43, 25, 77, 51, 90, 2, 60, 33, 6, 98, 27],
//   },
//   {
//     cardNumber: 3,
//     answers: [4, 18, 56, 88, 10, 73, 65, 31, 39, 52, 81, 45, 93],
//   },
//   {
//     cardNumber: 4,
//     answers: [20, 75, 9, 11, 64, 48, 5, 87, 35, 99, 19, 24, 68],
//   },
//   {
//     cardNumber: 5,
//     answers: [7, 91, 53, 28, 50, 38, 80, 34, 44, 70, 12, 16, 58],
//   },
//   {
//     cardNumber: 6,
//     answers: [13, 22, 62, 66, 26, 47, 89, 32, 55, 71, 21, 74, 97],
//   },
//   {
//     cardNumber: 7,
//     answers: [42, 95, 57, 63, 46, 40, 78, 1, 83, 79, 61, 59, 17],
//   },
//   {
//     cardNumber: 8,
//     answers: [85, 76, 94, 69, 36, 30, 82, 96, 100, 91, 56, 42, 53],
//   },
//   {
//     cardNumber: 9,
//     answers: [33, 7, 89, 25, 63, 94, 77, 15, 49, 38, 59, 72, 18],
//   },
//   {
//     cardNumber: 10,
//     answers: [52, 31, 64, 20, 98, 6, 88, 3, 74, 83, 47, 21, 36],
//   },
//   {
//     cardNumber: 11,
//     answers: [68, 54, 43, 99, 5, 24, 1, 62, 17, 60, 8, 14, 55],
//   },
//   {
//     cardNumber: 12,
//     answers: [92, 4, 19, 29, 39, 93, 46, 95, 30, 87, 70, 61, 79],
//   },
//   {
//     cardNumber: 13,
//     answers: [16, 66, 22, 81, 28, 34, 80, 71, 2, 50, 13, 41, 76],
//   },
//   {
//     cardNumber: 14,
//     answers: [3, 8, 15, 21, 34, 42, 57, 63, 78, 81, 96, 102, 115],
//   },
//   {
//     cardNumber: 15,
//     answers: [91, 51, 21, 18, 75, 67, 14, 31, 96, 9, 99, 20, 26],
//   },
//   {
//     cardNumber: 16,
//     answers: [79, 26, 5, 45, 44, 55, 19, 87, 66, 41, 63, 70, 3],
//   },
//   {
//     cardNumber: 17,
//     answers: [3, 8, 15, 21, 34, 42, 57, 63, 78, 81, 96, 100, 10],
//   },
//   {
//     cardNumber: 18,
//     answers: [100, 8, 32, 49, 16, 69, 12, 85, 98, 4, 62, 28, 47],
//   },
//   {
//     cardNumber: 19,
//     answers: [27, 56, 25, 50, 6, 95, 22, 78, 36, 35, 68, 9, 52],
//   },
//   {
//     cardNumber: 20,
//     answers: [82, 77, 88, 65, 37, 92, 7, 17, 1, 54, 58, 59, 30],
//   },
//   {
//     cardNumber: 21,
//     answers: [73, 81, 91, 86, 55, 64, 99, 14, 47, 19, 23, 68, 48],
//   },
//   {
//     cardNumber: 22,
//     answers: [11, 67, 51, 27, 38, 85, 44, 76, 5, 41, 75, 33, 58],
//   },
//   {
//     cardNumber: 23,
//     answers: [31, 40, 93, 97, 2, 13, 54, 35, 87, 96, 10, 46, 29],
//   },
//   {
//     cardNumber: 24,
//     answers: [17, 70, 61, 21, 60, 15, 79, 84, 91, 88, 32, 4, 50],
//   },
//   {
//     cardNumber: 25,
//     answers: [48, 20, 3, 28, 63, 12, 98, 1, 73, 49, 6, 57, 42],
//   },
//   {
//     cardNumber: 26,
//     answers: [9, 76, 18, 68, 80, 27, 72, 81, 94, 53, 7, 43, 25],
//   },
//   {
//     cardNumber: 27,
//     answers: [37, 30, 84, 74, 56, 10, 95, 90, 92, 13, 22, 33, 67],
//   },
//   {
//     cardNumber: 28,
//     answers: [75, 23, 40, 52, 19, 58, 83, 24, 82, 89, 71, 78, 11],
//   },
//   {
//     cardNumber: 29,
//     answers: [2, 39, 87, 97, 93, 62, 36, 70, 66, 20, 59, 30, 43],
//   },
//   {
//     cardNumber: 30,
//     answers: [45, 81, 49, 60, 69, 7, 17, 91, 42, 35, 38, 54, 12],
//   },
//   {
//     cardNumber: 31,
//     answers: [32, 94, 77, 15, 73, 61, 25, 22, 68, 58, 83, 48, 3],
//   },
//   {
//     cardNumber: 32,
//     answers: [19, 28, 53, 96, 14, 5, 99, 46, 76, 90, 37, 71, 65],
//   },
//   {
//     cardNumber: 33,
//     answers: [89, 50, 27, 4, 64, 56, 47, 23, 72, 85, 79, 34, 10],
//   },
//   {
//     cardNumber: 34,
//     answers: [26, 9, 57, 24, 67, 84, 41, 16, 98, 6, 92, 51, 18],
//   },
//   {
//     cardNumber: 35,
//     answers: [31, 74, 95, 63, 21, 82, 2, 11, 80, 52, 88, 33, 69],
//   },
//   {
//     cardNumber: 36,
//     answers: [17, 43, 97, 45, 39, 60, 75, 29, 86, 81, 55, 8, 94],
//   },
//   {
//     cardNumber: 37,
//     answers: [84, 40, 56, 12, 47, 90, 26, 73, 32, 70, 51, 2, 63],
//   },
//   {
//     cardNumber: 38,
//     answers: [53, 16, 28, 89, 19, 65, 91, 66, 72, 36, 61, 5, 42],
//   },
//   {
//     cardNumber: 39,
//     answers: [57, 71, 87, 34, 44, 15, 9, 49, 82, 80, 23, 50, 96],
//   },
//   {
//     cardNumber: 40,
//     answers: [3, 25, 18, 99, 76, 7, 14, 68, 38, 4, 92, 77, 24],
//   },
//   {
//     cardNumber: 41,
//     answers: [58, 27, 93, 35, 67, 78, 46, 64, 22, 85, 30, 69, 41],
//   },
//   {
//     cardNumber: 42,
//     answers: [49, 6, 74, 37, 62, 11, 33, 48, 1, 86, 52, 79, 20],
//   },
//   {
//     cardNumber: 43,
//     answers: [83, 88, 54, 10, 95, 97, 44, 21, 55, 8, 17, 59, 40],
//   },
//   {
//     cardNumber: 44,
//     answers: [47, 66, 3, 31, 64, 77, 5, 95, 75, 21, 92, 28, 87],
//   },
//   {
//     cardNumber: 45,
//     answers: [51, 24, 63, 18, 84, 14, 39, 89, 35, 99, 68, 12, 79],
//   },
//   {
//     cardNumber: 46,
//     answers: [91, 15, 41, 37, 56, 52, 19, 76, 33, 97, 62, 60, 8],
//   },
//   {
//     cardNumber: 47,
//     answers: [69, 20, 36, 48, 44, 94, 82, 27, 11, 58, 70, 32, 25],
//   },
//   {
//     cardNumber: 48,
//     answers: [81, 57, 9, 7, 67, 73, 46, 34, 86, 98, 38, 45, 55],
//   },
//   {
//     cardNumber: 49,
//     answers: [43, 78, 30, 22, 29, 85, 96, 65, 4, 54, 16, 88, 93],
//   },
//   {
//     cardNumber: 50,
//     answers: [59, 71, 6, 74, 53, 90, 1, 80, 2, 61, 42, 26, 10],
//   },
//   {
//     cardNumber: 51,
//     answers: [40, 23, 50, 17, 72, 83, 94, 68, 89, 12, 77, 91, 55],
//   },
//   {
//     cardNumber: 52,
//     answers: [35, 15, 64, 58, 5, 37, 20, 44, 51, 78, 66, 92, 7],
//   },
//   {
//     cardNumber: 53,
//     answers: [49, 61, 25, 97, 14, 46, 69, 34, 31, 53, 24, 86, 82],
//   },
//   {
//     cardNumber: 54,
//     answers: [33, 62, 39, 80, 95, 84, 48, 76, 45, 3, 96, 70, 19],
//   },
//   {
//     cardNumber: 55,
//     answers: [29, 47, 11, 67, 22, 75, 54, 9, 56, 41, 73, 85, 38],
//   },
//   {
//     cardNumber: 56,
//     answers: [90, 72, 26, 43, 79, 21, 6, 88, 98, 40, 32, 13, 50],
//   },
//   {
//     cardNumber: 57,
//     answers: [2, 63, 71, 84, 17, 38, 60, 91, 7, 56, 29, 49, 16],
//   },
//   {
//     cardNumber: 58,
//     answers: [94, 27, 55, 45, 68, 22, 76, 5, 32, 79, 52, 11, 86],
//   },
//   {
//     cardNumber: 59,
//     answers: [39, 85, 64, 37, 97, 80, 15, 20, 70, 93, 28, 36, 74],
//   },
//   {
//     cardNumber: 60,
//     answers: [67, 12, 46, 81, 48, 98, 30, 89, 69, 62, 25, 73, 53],
//   },
//   {
//     cardNumber: 61,
//     answers: [41, 50, 95, 88, 72, 6, 57, 83, 23, 8, 19, 33, 51],
//   },
//   {
//     cardNumber: 62,
//     answers: [4, 78, 90, 18, 61, 34, 65, 47, 2, 75, 24, 96, 42],
//   },
//   {
//     cardNumber: 63,
//     answers: [59, 35, 77, 66, 21, 82, 40, 3, 54, 87, 14, 43, 10],
//   },
//   {
//     cardNumber: 64,
//     answers: [44, 58, 9, 31, 92, 26, 75, 99, 27, 53, 36, 84, 65],
//   },
//   {
//     cardNumber: 65,
//     answers: [1, 69, 62, 78, 84, 25, 92, 34, 13, 77, 41, 53, 89],
//   },
//   {
//     cardNumber: 66,
//     answers: [70, 42, 19, 57, 88, 37, 95, 15, 61, 23, 55, 98, 31],
//   },
//   {
//     cardNumber: 67,
//     answers: [3, 45, 63, 74, 86, 52, 29, 16, 94, 11, 80, 67, 71],
//   },
//   {
//     cardNumber: 68,
//     answers: [39, 76, 4, 68, 10, 49, 81, 35, 30, 90, 72, 54, 20],
//   },
//   {
//     cardNumber: 69,
//     answers: [17, 48, 7, 58, 60, 91, 47, 64, 33, 21, 51, 96, 38],
//   },
//   {
//     cardNumber: 70,
//     answers: [14, 97, 73, 8, 43, 2, 56, 85, 66, 18, 24, 79, 50],
//   },
//   {
//     cardNumber: 71,
//     answers: [82, 28, 87, 37, 54, 15, 71, 42, 80, 5, 90, 26, 61],
//   },
//   {
//     cardNumber: 72,
//     answers: [32, 69, 48, 1, 82, 16, 75, 93, 24, 59, 73, 38, 57],
//   },
//   {
//     cardNumber: 73,
//     answers: [88, 42, 68, 7, 33, 2, 19, 51, 94, 60, 45, 26, 11],
//   },
//   {
//     cardNumber: 74,
//     answers: [64, 25, 85, 90, 53, 35, 77, 12, 40, 72, 81, 50, 17],
//   },
//   {
//     cardNumber: 75,
//     answers: [78, 22, 89, 58, 37, 9, 30, 70, 96, 56, 62, 28, 47],
//   },
//   {
//     cardNumber: 76,
//     answers: [3, 55, 63, 47, 25, 99, 20, 87, 42, 73, 61, 91, 6],
//   },
//   {
//     cardNumber: 77,
//     answers: [53, 11, 84, 45, 69, 39, 80, 29, 19, 71, 36, 92, 68],
//   },
//   {
//     cardNumber: 78,
//     answers: [16, 74, 32, 86, 27, 4, 67, 14, 52, 76, 98, 40, 72],
//   },
//   {
//     cardNumber: 79,
//     answers: [8, 95, 65, 49, 31, 54, 33, 23, 83, 66, 97, 43, 58],
//   },
//   {
//     cardNumber: 80,
//     answers: [21, 50, 7, 94, 44, 18, 56, 85, 30, 76, 62, 91, 47],
//   },
//   {
//     cardNumber: 81,
//     answers: [82, 17, 89, 68, 11, 35, 45, 77, 29, 53, 96, 20, 74],
//   },
//   {
//     cardNumber: 82,
//     answers: [37, 60, 41, 72, 3, 47, 64, 94, 22, 88, 10, 75, 19],
//   },
//   {
//     cardNumber: 83,
//     answers: [63, 78, 32, 15, 51, 86, 27, 49, 8, 92, 14, 71, 56],
//   },
//   {
//     cardNumber: 84,
//     answers: [97, 43, 2, 57, 67, 28, 81, 6, 36, 69, 90, 23, 54],
//   },
//   {
//     cardNumber: 85,
//     answers: [59, 83, 25, 98, 34, 4, 65, 21, 48, 93, 37, 71, 62],
//   },
//   {
//     cardNumber: 86,
//     answers: [17, 88, 41, 52, 74, 30, 96, 79, 7, 69, 43, 61, 26],
//   },
//   {
//     cardNumber: 87,
//     answers: [55, 20, 38, 76, 12, 91, 58, 84, 33, 46, 64, 50, 81],
//   },
//   {
//     cardNumber: 88,
//     answers: [97, 18, 73, 5, 27, 85, 63, 14, 56, 89, 40, 72, 67],
//   },
//   {
//     cardNumber: 89,
//     answers: [10, 54, 23, 78, 44, 70, 3, 86, 61, 28, 68, 47, 94],
//   },
//   {
//     cardNumber: 90,
//     answers: [42, 99, 36, 66, 82, 9, 58, 31, 75, 22, 90, 19, 95],
//   },
//   {
//     cardNumber: 91,
//     answers: [45, 32, 60, 80, 49, 2, 24, 87, 15, 35, 83, 92, 68],
//   },
//   {
//     cardNumber: 92,
//     answers: [51, 75, 96, 27, 64, 38, 58, 19, 83, 90, 42, 88, 10],
//   },
//   {
//     cardNumber: 93,
//     answers: [17, 49, 78, 60, 39, 70, 23, 85, 32, 92, 44, 71, 5],
//   },
//   {
//     cardNumber: 94,
//     answers: [95, 28, 62, 77, 46, 53, 81, 16, 33, 89, 20, 67, 74],
//   },
//   {
//     cardNumber: 95,
//     answers: [3, 68, 11, 59, 42, 90, 24, 86, 37, 77, 50, 97, 84],
//   },
//   {
//     cardNumber: 96,
//     answers: [75, 38, 10, 57, 28, 65, 48, 84, 21, 90, 43, 86, 92],
//   },
//   {
//     cardNumber: 97,
//     answers: [65, 92, 49, 21, 70, 84, 38, 10, 86, 43, 28, 75, 48],
//   },
//   {
//     cardNumber: 98,
//     answers: [84, 75, 92, 65, 10, 21, 38, 43, 86, 28, 48, 70, 49],
//   },
//   {
//     cardNumber: 99,
//     answers: [28, 86, 92, 43, 38, 48, 21, 84, 75, 10, 65, 70, 49],
//   },
//   {
//     cardNumber: 100,
//     answers: [10, 28, 38, 43, 48, 65, 70, 75, 84, 86, 92, 49, 21],
//   },
// ];

// for (let index = 0; index < 13; index++) {
//   answerSheet.push(parseInt(prompt(`Digite o ${index + 1}: valor `)));
// }

// console.log(`\nGabarito : ${answerSheet.join(", ")} \n`);

// for (let bettor of bettors) {
//   let correctCount = 0;
//   for (let i = 0; i < answerSheet.length; i++) {
//     if (answerSheet[i] === bettor.answers[i]) {
//       correctCount++;
//     }
//   }

//   console.log(
//     correctCount !== 13
//       ? `Apostador ${bettor.cardNumber} acertou ${correctCount}`
//       : `Parabéns ${bettor.cardNumber},  tu foste o GANHADOR!`
//   );
// }

/*37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário. */

// let g = [];

// let r = [
//   [
//     'd', 'a', 'b', 'e', 'e',
//     'e', 'c', 'e', 'b', 'd',
//     'd', 'a', 'a', 'b', 'c',
//     'd', 'd', 'b', 'c', 'e'
//   ],
//   [
//     'a', 'a', 'e', 'b', 'a',
//     'd', 'd', 'e', 'd', 'a',
//     'd', 'c', 'c', 'e', 'd',
//     'e', 'b', 'e', 'c', 'b'
//   ],
//   [
//     'd', 'd', 'b', 'd', 'e',
//     'd', 'b', 'd', 'c', 'a',
//     'a', 'b', 'b', 'a', 'e',
//     'a', 'b', 'd', 'c', 'e'
//   ],
//   [
//     'e', 'e', 'b', 'c', 'e',
//     'b', 'b', 'b', 'b', 'a',
//     'a', 'b', 'a', 'e', 'b',
//     'd', 'c', 'c', 'a', 'c'
//   ],
//   [
//     'e', 'a', 'd', 'd', 'b',
//     'c', 'c', 'd', 'e', 'e',
//     'b', 'e', 'd', 'c', 'd',
//     'c', 'c', 'e', 'c', 'a'
//   ],
//   [
//     "a", "b", "c", "d", "e", "c", "c", "a", "a", "b", "e", "e", "b", 'c',
//   'd', 'd', 'b', 'c', 'e', 'e'
//   ],
//   [
//     'c', 'e', 'd', 'd', 'a',
//     'c', 'd', 'e', 'c', 'c',
//     'e', 'd', 'c', 'd', 'b',
//     'd', 'c', 'e', 'e', 'd'
//   ],
//   [
//     'd', 'e', 'b', 'd', 'b',
//     'd', 'a', 'b', 'e', 'a',
//     'e', 'c', 'c', 'c', 'd',
//     'c', 'b', 'c', 'b', 'b'
//   ],
//   [
//     'a', 'c', 'e', 'b', 'c',
//     'e', 'e', 'c', 'd', 'b',
//     'd', 'e', 'b', 'd', 'c',
//     'b', 'e', 'c', 'e', 'b'
//   ],
//   [
//     'd', 'b', 'c', 'd', 'd',
//     'd', 'd', 'e', 'e', 'd',
//     'd', 'd', 'c', 'd', 'c',
//     'd', 'a', 'e', 'e', 'c'
//   ],
//   [
//     'a', 'a', 'c', 'e', 'c',
//     'a', 'b', 'a', 'a', 'b',
//     'e', 'e', 'a', 'a', 'e',
//     'a', 'e', 'd', 'c', 'd'
//   ],
//   [
//     'e', 'e', 'c', 'e', 'd',
//     'c', 'd', 'b', 'd', 'b',
//     'a', 'a', 'd', 'c', 'd',
//     'b', 'c', 'e', 'a', 'c'
//   ],
//   ["c", "b", "c", "d", "e", "a", "c", "a", "a", "b", "d", "e", "b", 'c',
//   'd', 'd', 'b', 'c', 'e', 'e'],
//   [
//     'b', 'b', 'd', 'a', 'c',
//     'd', 'b', 'b', 'e', 'd',
//     'e', 'a', 'e', 'c', 'b',
//     'e', 'd', 'a', 'e', 'e'
//   ],
//   [
//     'd', 'e', 'a', 'b', 'e',
//     'c', 'b', 'd', 'd', 'c',
//     'b', 'c', 'e', 'c', 'a',
//     'b', 'e', 'b', 'b', 'a'
//   ],
//   [
//     'a', 'c', 'b', 'd', 'c',
//     'a', 'b', 'b', 'b', 'e',
//     'e', 'a', 'c', 'd', 'a',
//     'b', 'd', 'c', 'c', 'a'
//   ],
//   [
//     'e', 'd', 'e', 'a', 'd',
//     'd', 'e', 'b', 'c', 'b',
//     'c', 'd', 'e', 'e', 'd',
//     'a', 'd', 'd', 'c', 'c'
//   ],
//   [
//     'c', 'b', 'b', 'a', 'c',
//     'a', 'c', 'd', 'c', 'b',
//     'a', 'a', 'a', 'a', 'a',
//     'c', 'd', 'c', 'e', 'e'
//   ],
//   [
//     'd', 'a', 'c', 'e', 'c',
//     'a', 'b', 'a', 'a', 'c',
//     'e', 'a', 'c', 'd', 'b',
//     'b', 'b', 'e', 'e', 'e'
//   ],
//   [
//     'e', 'b', 'c', 'a', 'a',
//     'b', 'a', 'd', 'd', 'c',
//     'd', 'b', 'a', 'e', 'b',
//     'c', 'b', 'd', 'd', 'b'
//   ],
//   [
//     'b', 'a', 'e', 'b', 'd',
//     'e', 'b', 'c', 'd', 'a',
//     'c', 'c', 'c', 'd', 'b',
//     'a', 'e', 'a', 'b', 'c'
//   ],
//   [
//     'c', 'c', 'd', 'd', 'e',
//     'a', 'e', 'b', 'a', 'd',
//     'c', 'a', 'd', 'a', 'd',
//     'b', 'd', 'd', 'd', 'c'
//   ],
//   [
//     'b', 'c', 'b', 'c', 'b',
//     'b', 'a', 'a', 'a', 'd',
//     'd', 'd', 'e', 'c', 'd',
//     'a', 'b', 'e', 'a', 'a'
//   ],
//   [
//     'd', 'b', 'e', 'a', 'c',
//     'c', 'd', 'e', 'a', 'e',
//     'e', 'a', 'c', 'e', 'a',
//     'c', 'd', 'b', 'a', 'd'
//   ],
//   [
//     'e', 'c', 'b', 'd', 'a',
//     'd', 'a', 'e', 'b', 'a',
//     'd', 'a', 'd', 'd', 'c',
//     'e', 'c', 'c', 'a', 'a'
//   ],
//   [
//     'd', 'a', 'd', 'a', 'b',
//     'a', 'a', 'c', 'c', 'c',
//     'c', 'c', 'b', 'c', 'd',
//     'e', 'b', 'd', 'b', 'd'
//   ],
//   [
//     'c', 'd', 'c', 'c', 'e',
//     'a', 'e', 'e', 'd', 'e',
//     'd', 'e', 'e', 'd', 'c',
//     'b', 'a', 'b', 'a', 'b'
//   ],
//   [
//     'd', 'd', 'c', 'b', 'b',
//     'b', 'a', 'e', 'd', 'e',
//     'b', 'a', 'e', 'c', 'a',
//     'b', 'b', 'c', 'b', 'c'
//   ],
//   [
//     'b', 'b', 'b', 'c', 'b',
//     'a', 'c', 'd', 'e', 'd',
//     'b', 'c', 'b', 'b', 'b',
//     'e', 'c', 'c', 'd', 'c'
//   ],
//   [
//     'b', 'c', 'a', 'e', 'e',
//     'a', 'd', 'd', 'd', 'c',
//     'c', 'b', 'c', 'c', 'c',
//     'a', 'b', 'a', 'a', 'c'
//   ],
//   [
//     'e', 'a', 'd', 'd', 'e',
//     'd', 'b', 'a', 'c', 'c',
//     'd', 'b', 'c', 'e', 'b',
//     'a', 'e', 'c', 'c', 'd'
//   ],
//   [
//     'a', 'c', 'b', 'e', 'd',
//     'b', 'd', 'a', 'e', 'c',
//     'a', 'e', 'c', 'a', 'd',
//     'c', 'b', 'c', 'e', 'd'
//   ],
//   [
//     'd', 'a', 'c', 'a', 'd',
//     'c', 'e', 'a', 'e', 'e',
//     'd', 'c', 'b', 'b', 'b',
//     'b', 'c', 'b', 'd', 'd'
//   ],
//   [
//     'a', 'a', 'd', 'd', 'e',
//     'a', 'a', 'a', 'a', 'e',
//     'a', 'a', 'd', 'e', 'b',
//     'a', 'a', 'b', 'd', 'd'
//   ],
//   [
//     'c', 'b', 'd', 'd', 'e',
//     'a', 'c', 'c', 'b', 'e',
//     'e', 'e', 'd', 'd', 'a',
//     'a', 'b', 'a', 'a', 'b'
//   ],
//   [
//     'd', 'd', 'b', 'd', 'a',
//     'e', 'a', 'e', 'd', 'a',
//     'e', 'd', 'd', 'c', 'b',
//     'd', 'a', 'a', 'a', 'd'
//   ],
//   [
//     'd', 'b', 'c', 'a', 'd',
//     'c', 'b', 'a', 'd', 'c',
//     'a', 'a', 'b', 'c', 'b',
//     'a', 'b', 'd', 'b', 'd'
//   ],
//   [
//     'b', 'e', 'd', 'd', 'e',
//     'a', 'c', 'a', 'a', 'e',
//     'e', 'a', 'd', 'd', 'b',
//     'd', 'd', 'd', 'a', 'a'
//   ],
//   [
//     'b', 'a', 'b', 'e', 'e',
//     'd', 'd', 'e', 'c', 'b',
//     'e', 'a', 'c', 'd', 'd',
//     'e', 'a', 'd', 'd', 'b'
//   ],
//   [
//     'b', 'b', 'c', 'd', 'd',
//     'b', 'd', 'a', 'e', 'b',
//     'b', 'a', 'b', 'a', 'd',
//     'd', 'd', 'b', 'd', 'c'
//   ],
//   [
//     'd', 'd', 'b', 'd', 'd',
//     'e', 'e', 'b', 'a', 'c',
//     'e', 'b', 'a', 'e', 'a',
//     'e', 'a', 'e', 'c', 'e'
//   ],
//   [
//     'a', 'b', 'b', 'd', 'a',
//     'a', 'd', 'd', 'd', 'd',
//     'a', 'c', 'c', 'e', 'b',
//     'c', 'b', 'd', 'b', 'a'
//   ],
//   [
//     'd', 'b', 'a', 'd', 'd',
//     'c', 'd', 'c', 'e', 'b',
//     'd', 'b', 'e', 'a', 'e',
//     'd', 'c', 'a', 'e', 'a'
//   ],
//   [
//     'c', 'c', 'e', 'b', 'a',
//     'b', 'd', 'd', 'c', 'd',
//     'd', 'd', 'e', 'c', 'c',
//     'a', 'b', 'a', 'e', 'b'
//   ],
//   [
//     'a', 'd', 'a', 'b', 'a',
//     'e', 'e', 'e', 'e', 'e',
//     'b', 'd', 'a', 'd', 'd',
//     'b', 'c', 'e', 'e', 'd'
//   ],
//   [
//     'b', 'b', 'd', 'a', 'b',
//     'd', 'e', 'c', 'c', 'e',
//     'a', 'e', 'a', 'b', 'a',
//     'b', 'd', 'e', 'd', 'e'
//   ],
//   [
//     'a', 'c', 'b', 'b', 'c',
//     'd', 'a', 'b', 'a', 'a',
//     'a', 'b', 'c', 'c', 'c',
//     'e', 'e', 'c', 'd', 'b'
//   ],
//   [
//     'e', 'a', 'e', 'e', 'a',
//     'c', 'd', 'd', 'c', 'e',
//     'd', 'c', 'd', 'd', 'b',
//     'b', 'c', 'e', 'a', 'a'
//   ],
//   [
//     'c', 'b', 'c', 'b', 'd',
//     'd', 'c', 'a', 'd', 'd',
//     'a', 'a', 'd', 'c', 'a',
//     'd', 'a', 'e', 'b', 'd'
//   ],
//   [
//     'a', 'b', 'c', 'd', 'e',
//     'c', 'a', 'a', 'a', 'c',
//     'c', 'c', 'b', 'd', 'a',
//     'e', 'e', 'c', 'e', 'e'
//   ]
// ]

// let correctAnswersCount = 0;

// for (let index = 0; index < 20; index++) {
//   g.push(prompt(`Digite a resposta ${index + 1}:questao: `));
// }

// console.log("Respostas: ", g.join(", "));

// for (let index = 0; index < r.length; index++) {
//   correctAnswersCount = 0;
//   for (let iterator = 0; iterator < r[index].length; iterator++) {
//     if (r[index][iterator] === g[iterator]) {
//       correctAnswersCount++;
//     }
//   }
//   correctAnswersCount >= 12
//     ? console.log(
//         `O aluno${index + 1} acertou ${correctAnswersCount}. Está >>Aprovado!<<`
//       )
//     : console.log(
//         `O aluno${index + 1} acertou ${correctAnswersCount}. Está reprovado!`
//       );
// }

/*38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor. */

// let values = [],
//   operation = "";

// for (let index = 0; index < 6; index++) {
//   values.push(+prompt(`Digite o valor da ${index + 1} posição: `));
// }
// console.log(
//   "\n1- soma dos elementos; \n2- produto dos elementos;\n3- média dos elementos;\n4- ordene os elementos em ordem crescente;\n5- mostre o vetor. "
// );

// operation = +prompt(">> Qual operação deseja realizar? ");

// switch (operation) {
//   case 1:
//     console.log("\nA soma dos elementos é: ", sumElement(values));
//     break;
//   case 2:
//     console.log(
//       "\nO produto dos elementos é ",
//       values.reduce((acc, element) => acc * element, 1)
//     );
//     break;
//   case 3:
//     console.log("\nA média dos elementos é ", media(values));
//     break;
//   case 4:
//     console.log(
//       "\nElemntos em ordem crescente: ",
//       values.sort((a, b) => a - b).join(", ")
//     );
//     break;
//   case 5:
//     console.log("\nEsse é o vetor: ", values);
//     break;
//   default:
//     console.log("\nOpção inválida");
//     break;
// }

/*39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
 vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B */
// let a = [],
//   b = [];
// for (let index = 0; index < 100; index++) {
//   a.push(+prompt(`Digite o ${index} valor: `));
// }
// for (const element of a) {
//   if (element > 0) {
//     b.push(element);
//   }
// }

// console.log(b);

/* 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
 resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
 cada), representando as apostas feitas. Compare os números das apostas com o
 resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
 corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
 e quadras, apenas por quinas. */

//  let lotoResult = [];
//  let gambling = [];

//  console.log("Resultado oficial da loto");
//  for (let index = 0; index < 5; index++) {
//    lotoResult.push(parseInt(prompt(`Digite o ${index + 1} valor inteiro: `)));
//  }

//  for (let indexBookie = 0; indexBookie < 50; indexBookie++) {
//    console.log(`\nAposta ${indexBookie + 1}`);
//    let betAmount = [];
//    for (let indexNumber = 0; indexNumber < 5; indexNumber++) {
//      betAmount.push(parseInt(prompt(`Digite o ${indexNumber + 1} valor inteiro da aposta: `)));
//    }
//    gambling.push(betAmount);
//  }

//  for (let index = 0; index < gambling.length; index++) {
//    let acc = 0;
//    for (let betNumber of gambling[index]) {
//      if (lotoResult.includes(betNumber)) {
//        acc++;
//      }
//    }
//    if (acc === 5) {
//      console.log(`\nAposta ${index + 1}: Ganhador! \n`);
//    } else {
//      console.log(`Aposta ${index + 1}: Aposta não premiada.`);
//    }
//  }

/*41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
 idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
 nome e idade. */
// const pessoa = {
//   nome: "Samilis",
//   idade: 24,
// };
// console.log('A idade da pessoa é ', pessoa.idade);

// pessoa.email = "samilisbritto@gmail.com";

/* 42. Crie um objeto chamado dados que contémváriaspropriedades, incluindo números,
 strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
 propriedades que são arrays. */

// data = {
//   name: "Samilis",
//   age: 24,
//   skills: ["React", "JavaScript", "Figma"],
//   city: "Capanema",
//   state : "Pará",
//   socialNetworks: [
//     "https://www.instagram.com/samilis_brito/",
//     "https://www.linkedin.com/in/samilis-brito/",
//     "https://github.com/SamilisBrito",
//   ],
//   email: "samilisbritto@gmail.com",
// };

// function retornarArray(obj) {
//   const newObj = {};
//   for (const key in obj) {
//     if (Array.isArray(obj[key])) {
//       console.log();
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

// console.log(retornarArray(data));

/* 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
 combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
 sobre as do obj1 em caso de conflitos. */

// const obj1 = {
//   name: "fulano",
//   age: 10,
//   levelEducation: "ens. fundamental",
// };

// const obj2 = {
//   name: "beltrano",
//   levelEducation: "ens. Médio",
//   city: "Britolândia",
// };

// function juncaoObjetos(obj1, obj2) {
//   const newObj = obj1;
//   for (const key in newObj) {
//     for (const key2 in obj2) {
//       if (key == key2) {
//         newObj[key] = obj2[key];
//       } else {
//         newObj[key2] = obj2[key2];
//       }
//     }
//   }
//   return newObj;
// }

// console.log(juncaoObjetos(obj1, obj2));

/* 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
 objeto e retorne esse número. */

//  const object = {
//   name: "John Doe",
//   age: 10,
//   education: "ens. Médio",
//   city: "Britolândia",
//   height: 1.5,
//   courses: ["curso1", "curso2", "curso3"],
// };

// function countStringsInObject(object) {
//   let counter = 0;
//   for (const key in object) {
//     if (typeof object[key] === "string") {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(countStringsInObject(object));

/* 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
 o número de vezes que a string aparece no array. */

// const fruits = [
//   "maçã",
//   "banana",
//   "laranja",
//   "uva",
//   "limão",
//   "abacaxi",
//   "laranja",
//   "banana",
//   "amora",
//   "laranja",
//   "manga",
//   "melancia",
//   "banana",
//   "laranja",
//   "ameixa",
//   "abacate",
//   "melão",
//   "melancia",
//   "melancia",
//   "carambola",
// ];

// const fruitObject = {};

// for (const fruit of fruits) {
//   if (!fruitObject.hasOwnProperty(fruit)) {
//     const fruitCount = fruits.filter((otherFruit) => fruit === otherFruit).length;
//     fruitObject[fruit] = fruitCount;
//   }
// }

// console.log(fruitObject);

/* 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
 com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
 de vendas por vendedor */

//  const sales = [
//   { seller: "João", amount: 100 },
//   { seller: "Maria", amount: 250 },
//   { seller: "João", amount: 50 },
//   { seller: "Pedro", amount: 120 },
//   { seller: "Maria", amount: 1000 },
// ];

// function sumTotalSalesBySeller(array) {
//   const totalSalesBySeller = {};
//   array.forEach(sale => {
//     if (!totalSalesBySeller[sale.seller]) {
//       totalSalesBySeller[sale.seller] = 0;
//     }
//     totalSalesBySeller[sale.seller] += sale.amount;
//   });
//   return totalSalesBySeller;
// }

// const summedObject = sumTotalSalesBySeller(sales)
// for (const key in summedObject) {
//   console.log(key, summedObject[key])
// }

/* 47. Crie uma função que transforme um objeto de entrada aplicando uma função
 fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
 resultados. */

//  const object = {
//   value: 24,
//   value2: 1.63,
// };

// function transformObject(object, func) {
//   const newObject = {};
//   for (const key in object) {
//     newObject[key] = func(object[key]);
//   }
//   return newObject;
// }

// console.log(transformObject(object, (element) => 2 * element));

/*48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
 inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
 item em estoque. Escreva uma função que combine os inventários em um único objeto.
 Se um item aparecer em ambas as lojas, some as quantidades */

//  const storeInventoryA = {
//   Shirt: 10,
//   Pants: 15,
//   Dress: 8,
//   Jacket: 6,
//   nightgown: 3,
// };

// const storeInventoryB = {
//   Shirt: 12,
//   sock: 50,
//   Pants: 5,
//   Dress: 16,
//   Blouse: 4,
//   Skirt: 3,
// };

// function mergeObjects(object1, object2) {
//   const mergedObj = object1;
//   for (const key in mergedObj) {
//     for (const key2 in object2) {
//       if (mergedObj.hasOwnProperty(key2) && key === key2) {
//         mergedObj[key2] += object2[key2];
//       } else if (!mergedObj.hasOwnProperty(key2)) {
//         mergedObj[key2] = object2[key2];
//       }
//     }
//   }
//   return mergedObj;
// }

// console.log(mergeObjects(storeInventoryA, storeInventoryB));

/*49. Você recebe um array de objetos representando transações financeiras. Cada
 transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
 onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
 essa categoria. Adicionalmente, inclua um subtotal de valores por categoria. */
//  const transactions = [
//   { id: 1, value: 100, date: "2024-05-28", category: "Food" },
//   { id: 2, value: 50, date: "2024-05-28", category: "Transport" },
//   { id: 1, value: 200, date: "2024-05-28", category: "Food" },
//   { id: 2, value: 30, date: "2024-05-28", category: "Transport" },
//   { id: 5, value: 50.0, date: "2024-05-24", category: "Health" },
// ];

// function returnObjectByCategory(arrayOfObjects) {
//   const object = {};
//   arrayOfObjects.forEach((transaction) => {
//     if (!object.hasOwnProperty(transaction.category)) {
//       object[transaction.category] = [{ subtotal: transaction.value }, transaction];
//     } else {
//       object[transaction.category].push(transaction);
//       object[transaction.category][0].subtotal += transaction.value;
//     }
//   });
//   return object;
// }

// console.log(returnObjectByCategory(transactions));

/* 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
 deverá ser capaz de interagir com o usuário através do console do navegador e manter
 um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
 informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
 1.EstruturadeDados:
 ○ Hotel:Cadahotel deve ser umobjeto compropriedades para id, nome,
 cidade, quartos totais e quartos disponiveis.
 ○ Reservas:Cadareserva deve ser umobjeto contendo idReserva, idHotel, e
 nomeCliente.

 2. Funcionalidades:
 ○ Adicionarhotéis: Permitir que o usuário adicione novos hotéis ao sistema.
 ○ Buscarhotéisporcidade: Permitir que o usuário liste todos os hotéis
 disponíveis em uma cidade específica.
 ○ Fazerreserva: Permitir que um usuário faça uma reserva em um hotel. Isso
 deve diminuir o número de quartos disponiveis do hotel.
 ○ Cancelarreserva: Permitir que um usuário cancele uma reserva. Isso deve
 aumentar o númerodequartos disponiveis no hotel correspondente.
 ○ Listarreservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
 cliente.

 3. RegrasdeNegócio:
 ○ Umhotelsópodeaceitarreservas se houver quartos disponíveis.
 ○ Asreservasdevemseridentificadas por um ID único e associadas a um
 único hotel.

 4. DesafiosAdicionais (Opcionais):
 ○ Implementar uma função de check-in e check-out que atualize a
 disponibilidade de quartos.
 ○ Gerar relatórios de ocupação para um hotel.
 ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
 avaliações dentro do objeto do hotel */

function generateUUID() {
  var d = new Date().getTime();
  if (
    typeof performance !== "undefined" &&
    typeof performance.now === "function"
  ) {
    d += performance.now(); // Use high-precision timer if available
  }
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

function addHotel(hotels) {
  let hotelExistence = false;
  const name = prompt("Qual o nome do hotel? ")?.trim();
  const city = prompt("Qual a cidade? ")?.trim();
  const totalRooms = parseInt(
    prompt("Quantos quartos no total esse hotel têm? ")
  );

  if (totalRooms <= 0)
    return console.log(
      "\n>> O número de quartos deve ser positivo! \n>>!!!<< Hotel não adicionado!"
    );

  hotels.forEach((hotel) => {
    if (
      hotel.name.toLowerCase() === name.toLowerCase() &&
      hotel.city.toLowerCase() === city.toLowerCase()
    )
      hotelExistence = true;
  });

  if (hotelExistence)
    return console.log(
      "\n>> Esse hotel já existe nessa cidade!\n>>!!!<< Hotel não adicionado!"
    );

  if (isNaN(totalRooms) || !name || !city)
    return console.log(
      "\n>>!!!<< Hotel não adicionado pois os dados estão inválido!\n"
    );

  const hotel = {
    id: generateUUID(),
    name,
    city,
    totalRooms,
    totalAvailableBedrooms: totalRooms,
  };
  hotels.push(hotel);
  console.log(`\n>> Hotel ${name} adicionado!\n`);
}

function searchHotelsByCity(hotels) {
  let findings = [];
  const cityHotel = prompt("Em qual cidade deseja procurar? ").trim();
  hotels.forEach((hotel) => {
    if (hotel.city.toLowerCase().includes(cityHotel.toLowerCase())) {
      findings.push({ name: hotel.name, city: hotel.city });
    }
  });
  findings.length > 0
    ? findings.forEach((hotel, index) =>
        console.log(`>> ${index + 1}:  ${hotel.name} - Cidade: ${hotel.city}`)
      )
    : console.log("\n>> Não temos hotel nessa cidade :(");
}

function search(args) {
  const ENTITIES = {
    customer: "cliente",
    reservation: "reserva",
    hotel: "hotel",
  };

  let option;
  let finding;

  do {
    let i = 1;
    option = prompt(`Qual o NOME do ${ENTITIES[args.key2]}? `)
      .trim()
      .toLowerCase();

    finding = args.database.filter((entity) => {
      if (entity[args.key1].toLowerCase().includes(option)) {
        if (args.key2 === "customer") {
          args.hotelDatabase.forEach((hotel) => {
            hotel.id === entity.idHotel &&
              console.log(
                `>> ${i++}: (ID ${entity.idReservation})  ${
                  entity.customerName
                } - ${hotel.name} `
              );
          });
        } else {
          console.log(
            `>> ${i++}: ${entity[args.key1]} ${
              args.key3 ? " - Cidade: " + entity[args.key3]?.toString() : ""
            }`
          );
        }

        return entity;
      }
    });

    if (finding.length !== 1 && finding.length !== 0) {
      option = +prompt(`Qual o NÚMERO do ${args.key2}? `) - 1;

      finding = finding.filter((entity, index) => {
        if (option === index) {
          return entity;
        }
      });
    }
  } while (finding.length !== 1 && finding.length !== 0);
  return finding;
}

function makeReservation(
  reservations,
  hotels,
  decreaseAvailableBedrooms,
  search
) {
  const hotelsWithRoomsAvailable = hotels.filter(
    (hotel) => hotel.totalAvailableBedrooms !== 0
  );

  if (hotelsWithRoomsAvailable.length === 0) {
    return console.log("\n>> Nenhum hotel com quartos disponíveis");
  }

  console.log("\nHoteis com quartos disponíveis");
  hotelsWithRoomsAvailable.forEach((hotel) => {
    console.log(`>> ${hotel.name} - Cidade: ${hotel.city}`);
  });

  const [reservationSearched] = search({
    database: hotelsWithRoomsAvailable,
    key1: "name",
    key2: "hotel",
    key3: "city",
  });

  console.log(reservations);
  if (reservationSearched === undefined)
    return console.log(`\n>> O hotel informado não existe`);

  const name = prompt("Qual o nome do cliente? ");
  if (!name) return console.log("\n>> O nome não deve ser vazio");

  const reservation = {
    idReservation: generateUUID(),
    idHotel: reservationSearched.id,
    customerName: name,
  };

  reservations.push(reservation);

  console.log(
    `\n>> Cliente ${name} reservado no hotel >> ${reservationSearched.name} <<\n`
  );

  decreaseAvailableBedrooms(reservation.idHotel, hotelsWithRoomsAvailable);
}

function decreaseAvailableBedrooms(id, hotels) {
  hotels.forEach((hotel) => {
    if (hotel.id === id) {
      hotel.totalAvailableBedrooms -= 1;
    }
  });
}

function increaseAvailableBedrooms(id, hotels) {
  hotels.forEach((hotel) => {
    if (hotel.id === id) {
      hotel.totalAvailableBedrooms += 1;
    }
  });
}

function removeCustomerFromReservation(reservations, customer) {
  reservations.forEach((reservation, index) => {
    if (reservation.idReservation === customer.idReservation) {
      reservations.splice(index, 1);
    }
  });
}

function rate(customer, hotels) {
  let sum = 0,
    totalEvaluations = 0;

  const doEvaluation = prompt(
    `Deseja avaliar o estabelecimento? (s: sim | n: qualquer outra tecla) `
  )
    .trim()
    .toLocaleLowerCase();

  if (doEvaluation !== "s") return console.log(">> Ação cancelada");

  console.log("1:⭐\n2:⭐⭐\n3:⭐⭐⭐\n4:⭐⭐⭐⭐\n5:⭐⭐⭐⭐⭐");
  const totalStars = +prompt("Qual sua avaliação? ");

  if (totalStars < 1 || totalStars > 5) {
    return console.log("\n>> Avaliação inválida!");
  }

  hotels.forEach((hotel) => {
    if (hotel.id === customer.idHotel) {
      let evaluation = hotel.evaluation || {
        totalRate: 0,
        stars: {},
      };

      if (!evaluation.stars.hasOwnProperty(totalStars)) {
        evaluation.stars[totalStars] = 0;
      }

      evaluation.stars[totalStars] += 1;

      for (const key in evaluation.stars) {
        sum += parseInt(key) * evaluation.stars[key];
        totalEvaluations += evaluation.stars[key];
      }

      evaluation.totalRate = (sum / totalEvaluations).toFixed(1);
      hotel.evaluation = evaluation;
    }
  });

  return console.log("\n>> Avaliação adicionada!");
}

function doCheckIn(reservations, hotels, checkIns, search) {
  const reserveWithoutCheckIn = reservations.filter(
    (reservation) =>
      !checkIns.find(
        (check) => check.idReservation === reservation.idReservation
      )
  );
  let [checkInCustomer] = search({
    database: reserveWithoutCheckIn,
    hotelDatabase: hotels,
    key1: "customerName",
    key2: "customer",
  });

  if (checkInCustomer === undefined) {
    return console.log(`\n>> O cliente informado não existe`);
  }

  const continueCheckIn = prompt(
    `Iniciar checkIn do cliente (s: sim | n: qualquer outra tecla) `
  ).toLocaleLowerCase();

  if (continueCheckIn !== "s") return console.log("\n>> Ação cancelada");

  let checkIn = {
    id: generateUUID(),
    idReservation: checkInCustomer.idReservation,
    checkIn: new Date(),
    checkOut: null,
  };

  checkIns.push(checkIn);
  console.log(
    `\n>> CheckIn do cliente ${checkInCustomer.customerName} realizada `
  );
}

function doCheckOut(
  reservations,
  hotels,
  checkIns,
  rate,
  increaseAvailableBedrooms,
  removeCustomerFromReservation,
  search
) {
  const reservationsWithCheckIn = reservations.filter((reservation) => {
    let isCheck = false;
    checkIns.forEach((check) => {
      if (
        check.checkOut === null &&
        reservation.idReservation === check.idReservation
      ) {
        isCheck = true;
      }
    });
    return isCheck;
  });

  let [customerCheckOut] = search({
    database: reservationsWithCheckIn,
    hotelDatabase: hotels,
    key1: "customerName",
    key2: "customer",
  });

  if (customerCheckOut === undefined)
    return console.log(
      `\n>> O cliente informado não existe ou ainda não realizou check-in`
    );

  const continueCheckOut = prompt(
    `Iniciar checkOut do cliente (s: sim | n: qualquer outra tecla) `
  )
    .trim()
    .toLocaleLowerCase();

  if (continueCheckOut !== "s") return console.log("\n>> Ação cancelada");

  checkIns.forEach((check, index) => {
    if (check.idReservation === customerCheckOut.idReservation) {
      checkIns[index].checkOut = new Date();
    }
  });

  console.log(
    `\n>> CheckOut do cliente ${customerCheckOut.customerName} realizada `
  );

  rate(customerCheckOut, hotels, reservations);
  increaseAvailableBedrooms(customerCheckOut.idHotel, hotels);
  removeCustomerFromReservation(reservations, customerCheckOut);
}

function generateOccupancyReport(hotels, search) {
  const [hotel] = search({
    database: hotels,
    key1: "name",
    key2: "hotel",
    key3: "city",
  });
  console.log(
    `>> ⭐ ${
      hotel.evaluation ? hotel.evaluation.totalRate : 0
    } avaliações \n>> O hotel ${hotel.name} da cidade ${hotel.city} têm ${
      hotel.totalRooms
    } quartos sendo que ${hotel.totalAvailableBedrooms} estão disponíveis\n`
  );
}

function cancelReservation(
  reservations,
  hotels,
  checkIns,
  increaseAvailableBedrooms,
  removeCustomerFromReservation,
  search
) {
  let [reservationToCancel] = search({
    database: reservations,
    hotelDatabase: hotels,
    key1: "customerName",
    key2: "customer",
  });

  if (reservationToCancel === undefined)
    return console.log(`\n>> O cliente informado não existe`);

  const hasCheckIn = checkIns.find(
    (x) => x.idReservation === reservationToCancel.idReservation
  );

  if (hasCheckIn)
    return console.log(
      `\n>> O cliente não pode cancelar reserva pois já realizou check-in`
    );

  const cancellationConfirmation = prompt(
    `Deseja cancelar o  cliente (s: sim | n: qualquer outra tecla) `
  ).toLocaleLowerCase();

  if (cancellationConfirmation !== "s")
    return console.log("\n>> Ação cancelada");

  increaseAvailableBedrooms(reservationToCancel.idHotel, hotels);
  removeCustomerFromReservation(reservations, reservationToCancel);
  console.log(
    `\n>> Reserva do cliente ${reservationToCancel.customerName} cancelada `
  );
}

function listReservations(reservations, hotels) {
  reservations.forEach((reservation) => {
    hotels.forEach((hotel) => {
      if (hotel.id === reservation.idHotel) {
        console.log(
          `>> A reserva ${reservation.idReservation} do cliente ${reservation.customerName} é no hotel ${hotel.name}`
        );
      }
    });
  });
}

const hotels = [];

const reservations = [];

const checks = [];

let option;

do {
  console.log(
    "\n-------------- Bem vindo(a) ao Reserve Hoteis! --------------\n"
  );
  console.log("Coloque o número da operação que deseja realizar: ");
  console.log(
    "0: sair\n1: Adicionar hotéis\n2: Buscar hotéis por cidade\n3: Fazer reserva\n4: Cancelar reserva\n5: Listar reservas\n6: CheckIn\n7: CheckOut\n8: Relatório de ocupação de hotel\n"
  );

  option = +prompt("Qual opção? ");
  console.log();
  switch (option) {
    case 0:
      console.clear();
      console.log(">> Saindo...");
      break;

    case 1:
      console.clear();
      console.log("\n-------------- Adicionando hotel --------------\n");
      addHotel(hotels);
      break;

    case 2:
      console.clear();
      console.log("\n-------------- Buscando hoteis --------------\n");
      searchHotelsByCity(hotels);
      break;

    case 3:
      console.clear();
      console.log("\n-------------- Fazendo reservas --------------\n");
      makeReservation(reservations, hotels, decreaseAvailableBedrooms, search);
      break;

    case 4:
      console.clear();
      console.log("\n-------------- Cancelando reserva --------------\n");
      cancelReservation(
        reservations,
        hotels,
        checks,
        increaseAvailableBedrooms,
        removeCustomerFromReservation,
        search
      );
      break;

    case 5:
      console.clear();
      console.log("\n-------------- Listando reserva --------------\n");
      listReservations(reservations, hotels);
      break;

    case 6:
      console.clear();
      console.log("\n-------------- Fazendo check in --------------\n");
      doCheckIn(reservations, hotels, checks, search);
      break;

    case 7:
      console.clear();
      console.log("\n-------------- Fazendo check out --------------\n");
      doCheckOut(
        reservations,
        hotels,
        checks,
        rate,
        increaseAvailableBedrooms,
        removeCustomerFromReservation,
        search
      );
      break;

    case 8:
      console.clear();
      console.log(
        "\n-------------- Relatório de ocupação de um Hotel --------------\n"
      );
      generateOccupancyReport(hotels, search);
      break;

    default:
      console.clear();
      console.log(">> Opção inválida");
      break;
  }
} while (option !== 0);
