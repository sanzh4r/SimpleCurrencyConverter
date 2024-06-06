// Welcome to the Currency Converter!
// We have imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
const input = require('sync-input');

const USD = 1;
const JPY = 113.5;
const EUR = 0.89;
const RUB = 74.36;
const GBP = 0.75;
const currencies = ["JPY", "EUR", "RUB", "USD", "GBP"];
let result;

function convert(toConvertFrom, wishToConvertTo, amount) {
  let amountInUSD;
  switch (toConvertFrom) {
    case "USD":
      amountInUSD = amount / USD;
      break;
    case "JPY":
      amountInUSD = amount / JPY;
      break;
    case "EUR":
      amountInUSD = amount / EUR;
      break;
    case "RUB":
      amountInUSD = amount / RUB;
      break;
    case "GBP":
      amountInUSD = amount / GBP;
      break;
  }

  let converter;
  switch (wishToConvertTo) {
    case "USD":
      converter = USD;
      break;
    case "JPY":
      converter = JPY;
      break;
    case "EUR":
      converter = EUR;
      break;
    case "RUB":
      converter = RUB;
      break;
    case "GBP":
      converter = GBP;
      break;
  }
  result = (amountInUSD * converter).toFixed(4);
}

function toConvert() {
  console.log("What do you want to convert?");
  let toConvertFrom = input("From: ").toUpperCase();
  if (!currencies.includes(toConvertFrom)) {
    console.log("Unknown currency");
    toConvert();
  }
  let wishToConvertTo = input("To: ").toUpperCase();
  if (!currencies.includes(wishToConvertTo)) {
    console.log("Unknown currency");
    toConvert();
  }
  let amount = input("Amount: ");
  if (isNaN(amount)) {
    console.log("The amount has to be a number");
    toConvert();
  } else if (amount < 1) {
    console.log("The amount cannot be less than 1");
    toConvert();
  }
  convert(toConvertFrom, wishToConvertTo, amount)
  console.log("Result: " + amount + " " + toConvertFrom + " equals " + result +" " + wishToConvertTo);
  menu();
}

function exit() {
  console.log("Have a nice day!");
  process.exit();
}

function menu() {
  console.log("What do you want to do?");
  let menuInput = input("1-Convert currencies 2-Exit program\n");
  if (menuInput === "1") {
    toConvert();
  } else if (menuInput === "2") {
    exit();
  } else {
    console.log("Unknown input");
    menu();
  }
}

console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");

menu();