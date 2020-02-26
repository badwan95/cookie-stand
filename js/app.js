'use strict';
// First Business
var hours = [ '6:00am','7:00am','8:00am','9:00am', '10:00am', '11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

var locationArr = [];


function firstRow(){
  var mainParent = document.getElementById('locations');
  var tableEl = document.createElement('table');
  mainParent.appendChild(tableEl);
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = '';
  for (let i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = hours[i];
  }
  thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'Daily Total';
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
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = this.locationName;
  for (let i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = this.soldPerHour[i];
  }
  thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = this.totalCookies;

};

new Business('Seattle', 23 , 65 , 6.3);


new Business('Tokyo', 3 , 24 , 1.3);


new Business('Dubai', 11 , 38 , 3.7);


new Business('Paris', 20 , 38 , 2.3);


new Business('Lima', 2 , 16 , 4.6);


function lastRow(){
  var trEl = document.createElement('tr');
  var selector = document.querySelector('table');
  selector.appendChild(trEl);
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'Total';
  var hourFinalTotal;
  var totalOfTotal = 0;
  for(var hour = 0 ; hour < hours.length ; hour++){
    hourFinalTotal = 0;
    for(var cities = 0 ; cities < locationArr.length ; cities++){
      hourFinalTotal += locationArr[cities].soldPerHour[hour];
    }
    var thElTotalHour = document.createElement('th');
    thElTotalHour.textContent = hourFinalTotal;
    totalOfTotal += hourFinalTotal;
    trEl.appendChild(thElTotalHour);
  }
  var thtotalOfTotal = document.createElement('th');
  thtotalOfTotal.textContent = totalOfTotal;
  trEl.appendChild(thtotalOfTotal);

}
lastRow();

// FUNCTION
function getCustomerNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
