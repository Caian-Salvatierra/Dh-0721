const dateFns = require('date-fns')
const moment = require('moment')

//Resolver as questões abaixo com o date-Fns 
//(caso queiram comparar, fazer as mesma questões utilizando moment)


//1) Obter diferença de dias entre 15/09/2010 e 10/06/2020
let dataIniEx1 = new Date(2010,08,15)
let dataFimEx1 = new Date(2020,05,10)
let resultadodoItem1 = dateFns.differenceInDays(dataFimEx1,dataIniEx1) 
//console.log('A diferença de dias entre as datas é: ' + resultadodoItem1 )
// A diferença de dias entre as datas é 3556

//2 Obter diferença de meses entre 15/09/2021 e 28/06/2021  
let dataIniEx2 = new Date(2011,08,15)
let dataFimEx2 = new Date(2021,05,28) 
let resultadodoItem2 = dateFns.differenceInMonths(dataFimEx2, dataIniEx2)
//console.log('A diferença de meses entre as datas é: ' + resultadodoItem2)
//A diferença de meses entre as datas é: 117


//3 Adicionar 32 dias na data 20/03/2021 

let dataEx3 = new  Date(2021,02,20)
let resultadoItem3 = dateFns.addDays(dataEx3, 32)
console.log('A data após adicionarmos 32 dias é: ' + resultadoItem3) 
//A data após adicionarmos 32 dias é: Wed Apr 21 2021 00:00:00 GMT-0300 (Horário Padrão de Brasília)