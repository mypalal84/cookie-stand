'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  min: 23,
  max: 65,
  average: 6.3,
  hourlyArray: [],
  randCustFirstAndPike: function getRandomArbitrary(min, max) {
    console.log(Math.floor(Math.random() * (this.max - this.min) + this.min));
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  cookieProducer: function (randCustFirstAndPike, average) {
    for (var i = 0; i < hours.length; i++) {
      var AvgCookiesPerHour = Math.floor(this.average * this.randCustFirstAndPike());
      this.hourlyArray.push(AvgCookiesPerHour);
    }
    console.log(this.hourlyArray);
    return this.hourlyArray;
  },
  cookiesTotal: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyArray.length; i++) {
      total += this.hourlyArray[i];
    }
    console.log(total);
    return total;
  },
  listCookieSales: function() {
    var hourlySales = document.getElementById('cookie-sales');
    for (var i = 0; i < this.firstAndPike.hourlyArray.length; i++) {
      console.log(hours[i]);
      var listElement = document.createElement('li');//step 1
      listElement.setAttribute('class', 'cookie-sale-list');//step 2
      listElement.textContent = hours[i] + ': ' + firstAndPike.hourlySales[i] + 'cookies';//step 2 also
      hourlySales.appendChild(listElement);//step 3
    };
    console.log(hourlySales.children);
  }
};
firstAndPike.cookieProducer();
firstAndPike.cookiesTotal();

var seaTac = {
  min: 3,
  max: 24,
  average: 1.2,
  randCustSeaTac: function (min, max) {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  }
};

seaTac.randCustSeaTac();

var seattleCenter = {
  min: 11,
  max: 38,
  average: 3.7,
  randCustSeattleCenter: function (min, max) {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  }
};

seattleCenter.randCustSeattleCenter();

var capHill = {
  min: 20,
  max: 38,
  average: 2.3,
  randCustCapHill: function (min, max) {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  }
};

capHill.randCustCapHill();

var alki = {
  min:  2,
  max: 16,
  average: 4.6,
  randCustAlki: function (min, max) {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  }
};

alki.randCustAlki();
