// let result = [];
// let resultIndex = 0;

// const area = (width, high) => {
//   const answer = width * high;
//   result[resultIndex++] = { width, high, area: answer };
//   console.log(`${answer}sqft`);
// };

// area(23, 32);
// area(22, 34);
// console.table(result);

// const exchangeMmk = (amount, currency) => {
//   const currencyRate = rate[currency];
//   console.log(`${currency} is ${currencyRate}`);
//   return amount * currencyRate;
// };

// console.log(exchangeMmk(23, "usd"));
// console.log(exchangeMmk(23, "eur"));
// console.log(exchangeMmk(23, "sg"));

// const rate = {
//   usd: 2100,
//   eur: 2333,
//   sg: 2231,
// };
// const exchangeFromMmkToCurrency = (amount, currency) => {
//   const currencyRate = rate[currency];
//   const result = amount / currencyRate;

//   return `${result.toFixed(1)} ${currency}`;
// };

// console.log(exchangeFromMmkToCurrency(50000, "usd"));
// console.log(exchangeFromMmkToCurrency(50000, "eur"));
// console.log(exchangeFromMmkToCurrency(50000, "sg"));

// console.log(true ? "this is true " : "false");
// console.log(!!!!true);

//count

// let count = 0;
let date = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// console.log(monthNames.pop());
// console.log(monthNames.push("kml"));
// console.log(monthNames.shift());
// console.log(monthNames.unshift("January"));

// console.log(monthNames);

// console.log(monthNames.join("\n"));
// console.log(monthNames.slice(1, 4));
// console.log(monthNames.splice(1, 4));
// console.log(monthNames);
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.table([...dayNames, ...monthNames]);

console.log(isNaN(1));
console.log(Array.isArray(monthNames));

// console.log(date);
// console.log(Date.now());
// console.log(date.getFullYear());
// console.log(dayNames[date.getDay()]);
// console.log(monthNames[date.getMonth()]);
