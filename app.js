'use strict';

var hours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopNames = ['First and Pike', 'Sea Tac', 'Seattle Center', 'Cap Hill', 'Alki'];

function Shop(name, min, max, average){
  this.name = name;
  this.min = min;
  this.max = max;
  this.average = average;
  this.cookiesArray = [];
}

Shop.prototype.randCust = function (min, max){
  console.log(Math.round(Math.random() * (this.max - this.min) + this.min));
  return Math.round(Math.random() * (this.max - this.min) + this.min);
};

Shop.prototype.cookieProducer = function (){
  for (var i = 1; i < hours.length; i++){
    var AvgCookiesPerHour = Math.round(this.average * this.randCust());
    this.cookiesArray.push(AvgCookiesPerHour);
  }
  console.log(this.cookiesArray);
  return this.cookiesArray;
};

Shop.prototype.cookiesTotal = function(){
  var total = 0;
  this.cookieProducer();
  for (var i = 0; i < this.cookiesArray.length; i++) {
    total += this.cookiesArray[i];
  }
  console.log(total);
  return total;
};

Shop.prototype.showOnPage = function() {
  var tableEl = document.getElementById('cookie-table');
  var trEl = document.createElement('tr');
  for(var i = 1; i < hours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  };
  tableEl.appendChild(trEl);
  for (var j = 0; j < shopNames.length; j++){
    trEl = document.createElement('tr');
    for (var k = 0; k < this.cookiesArray.length; k++){
      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesArray[k];
      trEl.appendChild(tdEl);
    }
    tableEl.appendChild(trEl);
  }
};

var firstAndPikeShop = new Shop('First and Pike', 23, 65, 6.3);
console.log(firstAndPikeShop);
firstAndPikeShop.cookiesTotal();
firstAndPikeShop.showOnPage();

var seaTacShop = new Shop('Sea Tac', 3, 24, 1.2);
console.log(seaTacShop);

var seattleCenterShop = new Shop('Seattle Center', 11, 38, 3.7);
console.log(seattleCenterShop);

var capHillShop = new Shop('Cap Hill', 20, 38, 2.3);
console.log(capHillShop);

var alkiShop = new Shop('Alki', 2, 16, 4.6);
console.log(alkiShop);
