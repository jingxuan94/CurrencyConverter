window.onload = function(){
  let fromCountry = document.getElementsByClassName("currencyFrom")[0];
  let ToCountry = document.getElementsByClassName("currencyTo")[0];

  let xhr = new XMLHttpRequest();
  xhr.open('GET','https://free.currconv.com/api/v7/currencies?apiKey=4c1d3d46b1b83a2884a9',true);
  xhr.onload=function(){
    if(this.status == 200){
      let countries = JSON.parse(this.responseText);
      let output ='';

      for(let i in countries.results){
        output += `
        <option value = "`+ countries.results[i].id + `">
          ` + countries.results[i].currencyName +`
        </option>
        `
      }
      fromCountry.innerHTML=output;
      ToCountry.innerHTML=output;
    }
  }
  xhr.send();

  document.getElementById('getForm').addEventListener('submit',convertCur);
}

function convertCur(e){
  e.preventDefault();

  let number = document.getElementById('inNumber').value;
  let fromCountry = document.getElementsByClassName("currencyFrom")[0].value;
  let ToCountry = document.getElementsByClassName("currencyTo")[0].value;
  var convString = fromCountry + '_' + ToCountry;
  let link = 'https://free.currconv.com/api/v7/convert?q=' + convString + '&compact=ultra&apiKey=4c1d3d46b1b83a2884a9';

  let xhr = new XMLHttpRequest();
  xhr.open('GET',link,true);
  xhr.onload=function(){
    if(this.status == 200){
      let rate = JSON.parse(this.responseText);
      let output = rate[convString] * number;
      document.getElementById("outNumber").value = output;
    }
  }
  xhr.send();
}
