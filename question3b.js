question 3. display country region subregion and population

let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
  

let cregion = [];

    for (let countryregion of data) {
        cregion.push(countryregion['region']);
    }

    console.log(cregion);

 let csubregion = [];
  for (let countrysubregion of data) {
    csubregion.push(countrysubregion['subregion'])
  }  
  console.log(csubregion);

let cpopulation = [];
  for (let countrypopulation of data) {
    cpopulation.push(countrypopulation['population'])
  }  
  console.log(cpopulation);
};

xhr.send();
