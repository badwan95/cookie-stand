'use strict';
// First Business
var seattleBusiness = {
  locationName : 'Seattle',
  minCustomers : 23,
  maxCustomers : 65,
  averageCookieSale: 6.3,
  averageCustomers : 0,
  avgHourlyCookiesSold: 0,
  totalCookies: 0,
  soldPerHour : [],
  customerNumber : function(min,max){
    this.averageCustomers = getCustomerNumber(min,max);
  },
  averageHourlyCookies : function(){
    this.avgHourlyCookiesSold = Math.ceil(this.averageCustomers * this.averageCookieSale);
    return this.avgHourlyCookiesSold;
  },
  fullDayCookies : function(){
    for (let i = 0; i < 14; i++) {
      this.customerNumber(this.minCustomers,this.maxCustomers );
      this.averageHourlyCookies();
      this.soldPerHour.push(this.avgHourlyCookiesSold);
      this.totalCookies = this.totalCookies + this.avgHourlyCookiesSold;
    }
  },
  htmlInput : function(){
    var mainParent = document.getElementById('locations');
    var artEl = document.createElement('article');
    mainParent.appendChild(artEl);
    artEl.textContent = this.locationName;
    var ulEle = document.createElement('ul');
    artEl.appendChild(ulEle);
    for (let i = 0; i < this.soldPerHour.length; i++) {
      var time = 6 + i;
      var liEle = document.createElement('li');
      if (time <= 12) {
        liEle.textContent = `${time}am: ${this.soldPerHour[i]} cookies`;
        ulEle.appendChild(liEle);
      } else {
        var timeNew = time - 12;
        liEle.textContent = `${timeNew}pm: ${this.soldPerHour[i]} cookies`;
        ulEle.appendChild(liEle);
      }
      ulEle.appendChild(liEle);
    }
    liEle.textContent = `Total: ${this.totalCookies} cookies`;
  }
};
seattleBusiness.customerNumber(seattleBusiness.minCustomers, seattleBusiness.maxCustomers);
seattleBusiness.averageHourlyCookies();
seattleBusiness.fullDayCookies();
seattleBusiness.htmlInput();

// Second Business

var tokyoBusiness = {
  locationName : 'Tokyo',
  minCustomers : 3,
  maxCustomers : 24,
  averageCookieSale: 1.3,
  averageCustomers : 0,
  avgHourlyCookiesSold: 0,
  totalCookies: 0,
  soldPerHour : [],
  customerNumber : function(min,max){
    this.averageCustomers = getCustomerNumber(min,max);
  },
  averageHourlyCookies : function(){
    this.avgHourlyCookiesSold = Math.ceil(this.averageCustomers * this.averageCookieSale);
    return this.avgHourlyCookiesSold;
  },
  fullDayCookies : function(){
    for (let i = 0; i < 14; i++) {
      this.customerNumber(this.minCustomers,this.maxCustomers );
      this.averageHourlyCookies();
      this.soldPerHour.push(this.avgHourlyCookiesSold);
      this.totalCookies = this.totalCookies + this.avgHourlyCookiesSold;
    }
  },
  htmlInput : function(){
    var mainParent = document.getElementById('locations');
    var artEl = document.createElement('article');
    mainParent.appendChild(artEl);
    artEl.textContent = this.locationName;
    var ulEle = document.createElement('ul');
    artEl.appendChild(ulEle);
    for (let i = 0; i < this.soldPerHour.length; i++) {
      var time = 6 + i;
      var liEle = document.createElement('li');
      if (time <= 12) {
        liEle.textContent = `${time}am: ${this.soldPerHour[i]} cookies`;
        ulEle.appendChild(liEle);
      } else {
        var timeNew = time - 12;
        liEle.textContent = `${timeNew}pm: ${this.soldPerHour[i]} cookies`;
        ulEle.appendChild(liEle);
      }
      ulEle.appendChild(liEle);
    }
    liEle.textContent = `Total: ${this.totalCookies} cookies`;
  }
};
tokyoBusiness.customerNumber(tokyoBusiness.minCustomers, tokyoBusiness.maxCustomers);
tokyoBusiness.averageHourlyCookies();
tokyoBusiness.fullDayCookies();
tokyoBusiness.htmlInput();


// Third Business

var dubaiBusiness = {
  locationName : 'Dubai',
  minCustomers : 11,
  maxCustomers : 38,
  averageCookieSale: 3.7,
  averageCustomers : 0,
  avgHourlyCookiesSold: 0,
  totalCookies: 0,
  soldPerHour : [],
  customerNumber : function(min,max){
    this.averageCustomers = getCustomerNumber(min,max);
  },
  averageHourlyCookies : function(){
    this.avgHourlyCookiesSold = Math.ceil(this.averageCustomers * this.averageCookieSale);
    return this.avgHourlyCookiesSold;
  },
  fullDayCookies : function(){
    for (let i = 0; i < 14; i++) {
      this.customerNumber(this.minCustomers,this.maxCustomers );
      this.averageHourlyCookies();
      this.soldPerHour.push(this.avgHourlyCookiesSold);
      this.totalCookies = this.totalCookies + this.avgHourlyCookiesSold;
    }
  },
  htmlInput : function(){
    var mainParent = document.getElementById('locations');
    var artEl = document.createElement('article');
    mainParent.appendChild(artEl);
    artEl.textContent = this.locationName;
    var ulEle = document.createElement('ul');
    artEl.appendChild(ulEle);
    for (let i = 0; i < this.soldPerHour.length; i++) {
      var time = 6 + i;
      var liEle = document.createElement('li');
      if (time <= 12) {
        liEle.textContent = `${time}am: ${this.soldPerHour[i]} cookies`;
        ulEle.appendChild(liEle);
      } else {
        var timeNew = time - 12;
        liEle.textContent = `${timeNew}pm: ${this.soldPerHour[i]} cookies`;
        ulEle.appendChild(liEle);
      }
      ulEle.appendChild(liEle);
    }
    liEle.textContent = `Total: ${this.totalCookies} cookies`;
  }
};
dubaiBusiness.customerNumber(dubaiBusiness.minCustomers, dubaiBusiness.maxCustomers);
dubaiBusiness.averageHourlyCookies();
dubaiBusiness.fullDayCookies();
dubaiBusiness.htmlInput();

// Fourth Business

var parisBusiness = {
  locationName : 'Paris',
  minCustomers : 20,
  maxCustomers : 38,
  averageCookieSale: 2.3,
  averageCustomers : 0,
  avgHourlyCookiesSold: 0,
  totalCookies: 0,
  soldPerHour : [],
  customerNumber : function(min,max){
    this.averageCustomers = getCustomerNumber(min,max);
  },
  averageHourlyCookies : function(){
    this.avgHourlyCookiesSold = Math.ceil(this.averageCustomers * this.averageCookieSale);
    return this.avgHourlyCookiesSold;
  },
  fullDayCookies : function(){
    for (let i = 0; i < 14; i++) {
      this.customerNumber(this.minCustomers,this.maxCustomers );
      this.averageHourlyCookies();
      this.soldPerHour.push(this.avgHourlyCookiesSold);
      this.totalCookies = this.totalCookies + this.avgHourlyCookiesSold;
    }
  },
  htmlInput : function(){
    var mainParent = document.getElementById('locations');
    var artEl = document.createElement('article');
    mainParent.appendChild(artEl);
    artEl.textContent = this.locationName;
    var ulEle = document.createElement('ul');
    artEl.appendChild(ulEle);
    for (let i = 0; i < this.soldPerHour.length; i++) {
      var time = 6 + i;
      var liEle = document.createElement('li');
      if (time <= 12) {
        liEle.textContent = `${time}am: ${this.soldPerHour[i]} cookies`;
        ulEle.appendChild(liEle);
      } else {
        var timeNew = time - 12;
        liEle.textContent = `${timeNew}pm: ${this.soldPerHour[i]} cookies`;
        ulEle.appendChild(liEle);
      }
      ulEle.appendChild(liEle);
    }
    liEle.textContent = `Total: ${this.totalCookies} cookies`;
  }
};
parisBusiness.customerNumber(parisBusiness.minCustomers, parisBusiness.maxCustomers);
parisBusiness.averageHourlyCookies();
parisBusiness.fullDayCookies();
parisBusiness.htmlInput();

//Fifth Business

var limaBusiness = {
  locationName : 'Lima',
  minCustomers : 2,
  maxCustomers : 16,
  averageCookieSale: 4.6,
  averageCustomers : 0,
  avgHourlyCookiesSold: 0,
  totalCookies: 0,
  soldPerHour : [],
  customerNumber : function(min,max){
    this.averageCustomers = getCustomerNumber(min,max);
  },
  averageHourlyCookies : function(){
    this.avgHourlyCookiesSold = Math.ceil(this.averageCustomers * this.averageCookieSale);
    return this.avgHourlyCookiesSold;
  },
  fullDayCookies : function(){
    for (let i = 0; i < 14; i++) {
      this.customerNumber(this.minCustomers,this.maxCustomers );
      this.averageHourlyCookies();
      this.soldPerHour.push(this.avgHourlyCookiesSold);
      this.totalCookies = this.totalCookies + this.avgHourlyCookiesSold;
    }
  },
  htmlInput : function(){
    var mainParent = document.getElementById('locations');
    var artEl = document.createElement('article');
    mainParent.appendChild(artEl);
    artEl.textContent = this.locationName;
    var ulEle = document.createElement('ul');
    artEl.appendChild(ulEle);
    for (let i = 0; i < this.soldPerHour.length; i++) {
      var time = 6 + i;
      var liEle = document.createElement('li');
      if (time <= 12) {
        liEle.textContent = `${time}am: ${this.soldPerHour[i]} cookies`;
        ulEle.appendChild(liEle);
      } else {
        var timeNew = time - 12;
        liEle.textContent = `${timeNew}pm: ${this.soldPerHour[i]} cookies`;
        ulEle.appendChild(liEle);
      }
      ulEle.appendChild(liEle);
    }
    liEle.textContent = `Total: ${this.totalCookies} cookies`;
  }
};
limaBusiness.customerNumber(limaBusiness.minCustomers, limaBusiness.maxCustomers);
limaBusiness.averageHourlyCookies();
limaBusiness.fullDayCookies();
limaBusiness.htmlInput();































// FUNCTION
function getCustomerNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



