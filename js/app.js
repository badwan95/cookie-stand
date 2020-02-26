'use strict';
// First Business
var hours = [ '6:00am','7:00am','8:00am','9:00am', '10:00am', '11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

var bottomRow = [];
var totalHourly = [];
var locationArr = [];

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
  thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'Daily Location Total';
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
  locationArr.push(this);
  this.customerNumber();
  this.averageHourlyCookies();
  this.fullDayCookies();
  this.renderTable();
}
Business.prototype.customerNumber = function(min,max){
  this.averageCustomers = getCustomerNumber(min,max);
};
Business.prototype.averageHourlyCookies = function(){
  this.avgHourlyCookiesSold = Math.ceil(this.averageCustomers * this.averageCookieSale);
  return this.avgHourlyCookiesSold;
};
Business.prototype.fullDayCookies = function(){
  for (let i = 0; i < hours.length; i++) {
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


function lastRow(){
  var trEl = document.createElement('tr');
  var selector = document.querySelector('table');
  selector.appendChild(trEl);
  // var bottomRow = ['Total'];
  for (let i = 1; i <= hours.length ; i++) {
    totalHourly = seattleBusiness.soldPerHour[i] + tokyoBusiness.soldPerHour[i] + dubaiBusiness.soldPerHour[i] + parisBusiness.soldPerHour[i] + limaBusiness.soldPerHour[i];
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
