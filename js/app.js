'use strict';
// First Business
var hours = [ '','6:00am','7:00am','8:00am','9:00am', '10:00am', '11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm', 'Daily Location Total'];

var bottomRow = ['','Total'];


function firstRow(){
  var mainParent = document.getElementById('locations');
  var tableEl = document.createElement('table');
  mainParent.appendChild(tableEl);
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  for (let i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = hours[i];
  }
}
firstRow();

function Business(locationName, minCustomers , maxCustomers , averageCookieSale){
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.soldPerHour = [];
  this.averageCookieSale= averageCookieSale;
  this.averageCustomers = 0;
  this.avgHourlyCookiesSold = 0;
  this.totalCookies = 0;
}
Business.prototype.customerNumber = function(min,max){
  this.averageCustomers = getCustomerNumber(min,max);
};
Business.prototype.averageHourlyCookies = function(){
  this.avgHourlyCookiesSold = Math.ceil(this.averageCustomers * this.averageCookieSale);
  return this.avgHourlyCookiesSold;
};
Business.prototype.fullDayCookies = function(){
  for (let i = 0; i < 14; i++) {
    this.customerNumber(this.minCustomers,this.maxCustomers );
    this.averageHourlyCookies();
    this.soldPerHour.push(this.avgHourlyCookiesSold);
    this.totalCookies = this.totalCookies + this.avgHourlyCookiesSold;
  }
};
Business.prototype.renderTable = function (){
  var trEl = document.createElement('tr');
  var selector = document.querySelector('table');
  selector.appendChild(trEl);
  this.soldPerHour.unshift(this.locationName);
  this.soldPerHour.push(this.totalCookies);
  for (let i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = this.soldPerHour[i];
  }

};

var seattleBusiness = new Business('Seattle', 23 , 65 , 6.3);
seattleBusiness.customerNumber();
seattleBusiness.averageHourlyCookies();
seattleBusiness.fullDayCookies();
seattleBusiness.renderTable();

var tokyoBusiness = new Business('Tokyo', 3 , 24 , 1.3);
tokyoBusiness.customerNumber();
tokyoBusiness.averageHourlyCookies();
tokyoBusiness.fullDayCookies();
tokyoBusiness.renderTable();

var dubaiBusiness = new Business('Dubai', 11 , 38 , 3.7);
dubaiBusiness.customerNumber();
dubaiBusiness.averageHourlyCookies();
dubaiBusiness.fullDayCookies();
dubaiBusiness.renderTable();

var parisBusiness = new Business('Paris', 20 , 38 , 2.3);
parisBusiness.customerNumber();
parisBusiness.averageHourlyCookies();
parisBusiness.fullDayCookies();
parisBusiness.renderTable();

var limaBusiness = new Business('Lima', 2 , 16 , 4.6);
limaBusiness.customerNumber();
limaBusiness.averageHourlyCookies();
limaBusiness.fullDayCookies();
limaBusiness.renderTable();

function lastRow(){
  var trEl = document.createElement('tr');
  var selector = document.querySelector('table');
  selector.appendChild(trEl);
  // var bottomRow = ['Total'];
  for (let i = 1; i <= hours.length ; i++) {
    var totalHourly = seattleBusiness.soldPerHour[i] + tokyoBusiness.soldPerHour[i] + dubaiBusiness.soldPerHour[i] + parisBusiness.soldPerHour[i] + limaBusiness.soldPerHour[i];
    bottomRow.push(totalHourly);
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = bottomRow[i];
  }
}
lastRow();

// FUNCTION
function getCustomerNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
