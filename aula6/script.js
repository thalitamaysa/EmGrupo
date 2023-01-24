// new Date()
// new Date(valor)
// new Date(dataString)
// new Date(ano, mês,dia, hora, minuto, segundo, milissegundo)
// console.log(new Date);

// const data = new Date (2001,12,11)
// data.getDay() // DIA DA SEMANA DE 0 A 6
// data.getFullYear() // ANO COMPLETO 4 DIGITOS
// data.toISOString()// STRING COM DATA COMPLETA NO FORMATO ISO 

// Date.now()
// Date.UTC()

const data = dayjs()
console.log(data.format());
console.log(data.format("YYYY MM DD"));
console.log(data.format("DD MM YYYY"));