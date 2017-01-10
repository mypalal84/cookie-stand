'use strict';
//global array
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//objects
var firstAndPike = {
  min: 23,
  max: 65,
  average: 6.3,
  hourlyArray: [],
  //method for random customers per day
  randCustFirstAndPike: function getRandomArbitrary(min, max) {
    console.log(Math.round(Math.random() * (this.max - this.min) + this.min));
    return Math.round(Math.random() * (this.max - this.min) + this.min);
  },
  //method for getting the average cookies per hour and putting them in an array
  cookieProducer: function(randCustFirstAndPike, average) {
    for (var i = 0; i < hours.length; i++) {
      var AvgCookiesPerHour = Math.round(this.average * this.randCustFirstAndPike());
      this.hourlyArray.push(AvgCookiesPerHour);
    }
    console.log(this.hourlyArray);
    return this.hourlyArray;
  },
  //method for getting the total cookies
  cookiesTotal: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyArray.length; i++) {
      total += this.hourlyArray[i];
    }
    console.log(total);
    return total;
  },
//method for writing the javascript to the html
  cookieSales: function(){
    var listHours = document.getElementById('cookie-sales');
    for (var i = 0; i < firstAndPike.hourlyArray.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ' Sales -' + firstAndPike.hourlyArray[i];
      listHours.appendChild(listItem);
    };
    var total = document.getElementById('cookie-sales');
    var listItem = document.createElement('li');
    listItem.textContent = 'Total - ' + firstAndPike.cookiesTotal(total);
    total.appendChild(listItem);
  }
};

firstAndPike.randCustFirstAndPike();
firstAndPike.cookieProducer();
firstAndPike.cookiesTotal();
firstAndPike.cookieSales();
console.log(firstAndPike.cookiestotal);

var seaTac = {
  min: 3,
  max: 24,
  average: 1.2,
  hourlyArray: [],
  //method for random customers per day
  randCustSeaTac: function getRandomArbitrary(min, max) {
    console.log(Math.round(Math.random() * (this.max - this.min) + this.min));
    return Math.round(Math.random() * (this.max - this.min) + this.min);
  },
  //method for getting the average cookies per hour and putting them in an array
  cookieProducer: function(randCustSeaTac, average) {
    for (var i = 0; i < hours.length; i++) {
      var AvgCookiesPerHour = Math.round(this.average * this.randCustSeaTac());
      this.hourlyArray.push(AvgCookiesPerHour);
    }
    console.log(this.hourlyArray);
    return this.hourlyArray;
  },
  //method for getting the total cookies
  cookiesTotal: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyArray.length; i++) {
      total += this.hourlyArray[i];
    }
    console.log(total);
    return total;
  },
//method for writing the javascript to the html
  cookieSales: function(){
    var listHours = document.getElementById('cookie-sales');
    for (var i = 0; i < seaTac.hourlyArray.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ' Sales -' + seaTac.hourlyArray[i];
      listHours.appendChild(listItem);
    };
    var total = document.getElementById('cookie-sales');
    var listItem = document.createElement('li');
    listItem.textContent = 'Total - ' + seaTac.cookiesTotal(total);
    total.appendChild(listItem);
  }
};

seaTac.randCustSeaTac();
seaTac.cookieProducer();
seaTac.cookiesTotal();
seaTac.cookieSales();
console.log(seaTac.cookiestotal);

var seattleCenter = {
  min: 11,
  max: 38,
  average: 3.7,
  hourlyArray: [],
  //method for random customers per day
  randCustSeattleCenter: function getRandomArbitrary(min, max) {
    console.log(Math.round(Math.random() * (this.max - this.min) + this.min));
    return Math.round(Math.random() * (this.max - this.min) + this.min);
  },
  //method for getting the average cookies per hour and putting them in an array
  cookieProducer: function(randCustSeattleCenter, average) {
    for (var i = 0; i < hours.length; i++) {
      var AvgCookiesPerHour = Math.round(this.average * this.randCustSeattleCenter());
      this.hourlyArray.push(AvgCookiesPerHour);
    }
    console.log(this.hourlyArray);
    return this.hourlyArray;
  },
  //method for getting the total cookies
  cookiesTotal: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyArray.length; i++) {
      total += this.hourlyArray[i];
    }
    console.log(total);
    return total;
  },
//method for writing the javascript to the html
  cookieSales: function(){
    var listHours = document.getElementById('cookie-sales');
    for (var i = 0; i < seattleCenter.hourlyArray.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ' Sales -' + seattleCenter.hourlyArray[i];
      listHours.appendChild(listItem);
    };
    var total = document.getElementById('cookie-sales');
    var listItem = document.createElement('li');
    listItem.textContent = 'Total - ' + seattleCenter.cookiesTotal(total);
    total.appendChild(listItem);
  }
};

seattleCenter.randCustSeattleCenter();
seattleCenter.cookieProducer();
seattleCenter.cookiesTotal();
seattleCenter.cookieSales();
console.log(seattleCenter.cookiestotal);

var capHill = {
  min: 20,
  max: 38,
  average: 2.3,
  hourlyArray: [],
  //method for random customers per day
  randCustCapHill: function getRandomArbitrary(min, max) {
    console.log(Math.round(Math.random() * (this.max - this.min) + this.min));
    return Math.round(Math.random() * (this.max - this.min) + this.min);
  },
  //method for getting the average cookies per hour and putting them in an array
  cookieProducer: function(randCustCapHill, average) {
    for (var i = 0; i < hours.length; i++) {
      var AvgCookiesPerHour = Math.round(this.average * this.randCustCapHill());
      this.hourlyArray.push(AvgCookiesPerHour);
    }
    console.log(this.hourlyArray);
    return this.hourlyArray;
  },
  //method for getting the total cookies
  cookiesTotal: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyArray.length; i++) {
      total += this.hourlyArray[i];
    }
    console.log(total);
    return total;
  },
//method for writing the javascript to the html
  cookieSales: function(){
    var listHours = document.getElementById('cookie-sales');
    for (var i = 0; i < capHill.hourlyArray.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ' Sales -' + capHill.hourlyArray[i];
      listHours.appendChild(listItem);
    };
    var total = document.getElementById('cookie-sales');
    var listItem = document.createElement('li');
    listItem.textContent = 'Total - ' + capHill.cookiesTotal(total);
    total.appendChild(listItem);
  }
};

capHill.randCustCapHill();
capHill.cookieProducer();
capHill.cookiesTotal();
capHill.cookieSales();
console.log(capHill.cookiestotal);

var alki = {
  min:  2,
  max: 16,
  average: 4.6,
  hourlyArray: [],
  //method for random customers per day
  randCustAlki: function getRandomArbitrary(min, max) {
    console.log(Math.round(Math.random() * (this.max - this.min) + this.min));
    return Math.round(Math.random() * (this.max - this.min) + this.min);
  },
  //method for getting the average cookies per hour and putting them in an array
  cookieProducer: function(randCustAlki, average) {
    for (var i = 0; i < hours.length; i++) {
      var AvgCookiesPerHour = Math.round(this.average * this.randCustAlki());
      this.hourlyArray.push(AvgCookiesPerHour);
    }
    console.log(this.hourlyArray);
    return this.hourlyArray;
  },
  //method for getting the total cookies
  cookiesTotal: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyArray.length; i++) {
      total += this.hourlyArray[i];
    }
    console.log(total);
    return total;
  },
//method for writing the javascript to the html
  cookieSales: function(){
    var listHours = document.getElementById('cookie-sales');
    for (var i = 0; i < alki.hourlyArray.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hours[i] + ' Sales -' + alki.hourlyArray[i];
      listHours.appendChild(listItem);
    };
    var total = document.getElementById('cookie-sales');
    var listItem = document.createElement('li');
    listItem.textContent = 'Total - ' + alki.cookiesTotal(total);
    total.appendChild(listItem);
  }
};

alki.randCustAlki();
alki.cookieProducer();
alki.cookiesTotal();
alki.cookieSales();
console.log(alki.cookiestotal);
