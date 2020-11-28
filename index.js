window.onload = function(){
  let fromCountry = document.getElementsByClassName("currencyFrom")[0];
  let ToCountry = document.getElementsByClassName("currencyTo")[0];

  var xhr = new XMLHttpRequest();
  xhr.open('GET','https://free.currconv.com/api/v7/currencies?apiKey=4c1d3d46b1b83a2884a9',true);

  xhr.onload=function(){
    if(this.status == 200){
      var countries = JSON.parse(this.responseText);
      var output ='';

      for(var i in countries.results){
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
}
