// string 1HGCM82633A004352

// ZENIT - POLAR

const helper = require('./helpers');
const vinNumber = "1HGCM82633A004352"
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


function encodeNumber(number) {
  const encodeParam = 5
  return parseInt(number) + 5
}

function decodedNumber(number) {
  const decodeParam = -5
  return parseInt(number) - 5
}

function encodeLetter(letter) {
  const letterConverter = Object.entries(helper.converter)
  const numberConverter = helper.converter[letter] + 5
  const encoded = letterConverter.filter(item => item[1] === numberConverter)
  
  return encoded[0][0]
}

function encodeVinNumber(vinNumber) {

  let encoded = ""

  for (let index in vinNumber) {
    if (isNaN(vinNumber[index])) {
      encoded += encodeLetter(vinNumber[index])
    } else {
      encoded += encodeNumber(vinNumber[index])
    }

  }

  return encoded;
}

console.log(encodeVinNumber(vinNumber))




