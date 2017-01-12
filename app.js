'use strict';

var hours = ['Stores', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

var shopNames = ['First and Pike', 'Sea Tac', 'Seattle Center', 'Cap Hill', 'Alki'];

//Object constructer
function Shop(name, min, max, average){
  this.name = name;
  this.min = min;
  this.max = max;
  this.average = average;
  this.cookiesArray = [];
}

//methods for Shop objects
Shop.prototype.cookiesPerHour = function (min, max){
  console.log(Math.round(Math.random() * (this.max - this.min) + this.min));
  for (var i = 0; i < hours.length - 2; i++){
    var randomNumber =  Math.round(Math.random() * (this.max - this.min) + this.min);
    var AvgCookiesPerHour = Math.round(this.average * randomNumber);
    this.cookiesArray.push(AvgCookiesPerHour);
  }
  console.log(this.cookiesArray);
};

Shop.prototype.cookiesTotal = function(){
  var total = 0;
  for (var i = 0; i < this.cookiesArray.length; i++) {
    total += this.cookiesArray[i];
  }
  this.cookiesArray.push(total);
  console.log(total);
};

Shop.prototype.showOnPage = function() {
  var tableEl = document.getElementById('cookie-table');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);
  for (var k = 0; k < this.cookiesArray.length; k++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesArray[k];
    trEl.appendChild(tdEl);
  }
  tableEl.appendChild(trEl);
};

//global functions
function renderTimes(){
  var tableEl = document.getElementById('cookie-table');
  var trEl = document.createElement('tr');
  for(var i = 0; i < hours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);
}

renderTimes();

//creating objects and calling methods
var firstAndPikeShop = new Shop('First and Pike', 23, 65, 6.3);
console.log(firstAndPikeShop);
firstAndPikeShop.cookiesPerHour();
firstAndPikeShop.cookiesTotal();
firstAndPikeShop.showOnPage();

var seaTacShop = new Shop('Sea Tac', 3, 24, 1.2);
console.log(seaTacShop);
seaTacShop.cookiesPerHour();
seaTacShop.cookiesTotal();
seaTacShop.showOnPage();

var seattleCenterShop = new Shop('Seattle Center', 11, 38, 3.7);
console.log(seattleCenterShop);
seattleCenterShop.cookiesPerHour();
seattleCenterShop.cookiesTotal();
seattleCenterShop.showOnPage();

var capHillShop = new Shop('Cap Hill', 20, 38, 2.3);
console.log(capHillShop);
capHillShop.cookiesPerHour();
capHillShop.cookiesTotal();
capHillShop.showOnPage();

var alkiShop = new Shop('Alki', 2, 16, 4.6);
console.log(alkiShop);
alkiShop.cookiesPerHour();
alkiShop.cookiesTotal();
alkiShop.showOnPage();

//form submit event listener and handler
var newStores = [];

var formEl = document.getElementById('new-store');

formEl.addEventListener('submit', function(event){
  event.preventDefault();
  event.stopPropagation();
  console.log(event.target.name.value + 'event listener is working');
  renderNewObject(event.target.name.value, event.target.min.value, event.target.max.value, event.target.average.value);
}, false);

function renderNewObject(name, min, max, average) {
  var newObject = new Shop(name, min, max, average);

  newObject.cookiesPerHour();
  newObject.cookiesTotal();
  newObject.showOnPage();

  newStores.push(newObject);
}
