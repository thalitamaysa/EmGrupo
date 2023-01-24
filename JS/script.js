// new Date();
// new Date(valor); //epoch time
// new Date(dataString) //String em formato de data
// new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);

// const data = new Date(2001,12,11);
// data.getDay(); // dia da semana de 0 a 6
// data.getFullYear(); //Ano completo 4 digitos
// data.toISOString(); //string com data completa no formato ISO
// //Metodos da Classe
// Date.now();
// date.UTC(); //epoch time de ano mes dia,... como argumentos


const data = dayjs()
console.log(data.format()) // 2022-09-05T 00:00+08:00
console.log(data.format('YYYY-MM-DD')) // 2022 09 05
console.log(data.format('DD/MM/YYYY')) // 05/09/2022
