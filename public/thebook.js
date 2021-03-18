//DON'T FORGET
//     1. Switch the ws socket to amazon before deploying (not local host) LINE:617 of thebook.js

console.log("hey hey hey");

const BGImages = [
  [
    "70deg0",
    "70deg20",
    "50deg40",
    "70deg60",
    "70deg80",
    "Any100",
    "70degShower",
    "AnyRain",
    "70degStorm",
    "70deg80",
    "Any100Snow"
  ],
  [
    "70deg0",
    "70deg20",
    "50deg40",
    "60deg60",
    "70deg80",
    "Any100",
    "70degShower",
    "AnyRain",
    "70degStorm",
    "70deg80",
    "Any100Snow"
  ],
  [
    "50deg0",
    "70deg20",
    "50deg40",
    "50deg60",
    "50deg80",
    "Any100",
    "50degShower",
    "AnyRain",
    "50degStorm",
    "50deg80",
    "Any100Snow"
  ],
  [
    "50deg0",
    "70deg20",
    "30deg40",
    "40deg60",
    "50deg80",
    "Any100",
    "50degShower",
    "AnyRain",
    "50degStorm",
    "50deg80",
    "Any100Snow"
  ],
  [
    "30deg0",
    "10deg20",
    "30deg40",
    "30deg60",
    "30deg80",
    "Any100",
    "30deg60",
    "AnyRain",
    "30degStorm",
    "30deg80",
    "Any100Snow"
  ],
  [
    "10deg0",
    "10deg20",
    "30deg40",
    "20deg60",
    "30deg80",
    "Any100",
    "20deg60",
    "AnyRain",
    "20degStorm",
    "30deg80",
    "Any100Snow"
  ],
  [
    "10deg0",
    "10deg20",
    "10deg40",
    "0deg60",
    "0deg80",
    "Any100",
    "10deg60",
    "AnyRain",
    "10degStorm",
    "0deg80",
    "Any100Snow"
  ],
  [
    "0deg0",
    "0deg20",
    "0deg40",
    "0deg60",
    "0deg80",
    "Any100",
    "0deg60",
    "AnyRain",
    "0degStorm",
    "0deg80",
    "Any100Snow"
  ],
  [
    "twilight10",
    "twilight120",
    "twilight140",
    "twilight160",
    "twilight280",
    "twilight1100",
    "twilight160",
    "twilight1100",
    "twilight1Storm",
    "twilight280",
    "twilight1100"
  ],
  [
    "twilight20",
    "twilight220",
    "twilight240",
    "twilight160",
    "twilight280",
    "twilight1100",
    "twilight160",
    "twilight1100",
    "twilight2Storm",
    "twilight280",
    "twilight1100"
  ],
  [
    "twilight30",
    "twilight320",
    "twilight340",
    "twilight160",
    "twilight280",
    "twilight3100",
    "twilight160",
    "twilight3100",
    "twilight3Storm",
    "twilight280",
    "twilight3100"
  ],
  [
    "night0",
    "night20",
    "night40",
    "night60",
    "night80",
    "night100",
    "night60",
    "night100",
    "night80",
    "night80",
    "night100"
  ]
];

const weatherIndex = {
  Clear: 0,
  "Scattered Clouds": 1,
  "Partly Cloudy": 2,
  "Mostly Cloudy": 3,
  Cloudy: 4,
  Overcast: 5,
  Showers: 6,
  Rain: 7,
  Thunderstorms: 8,
  "Snow Flurries": 9,
  Snow: 10,
  Sleet: 11
};

const locationsList = {
  Oldsea: {
    Lat: 46.0,
    Lon: -68.0
  },
  Owlslynn: {
    Lat: 49.0,
    Lon: -67.0
  },
  "Roswen": {
    Lat: 48.3,
    Lon: -69.3
  },
  "Wiclonde": {
    Lat: 47.0,
    Lon: -70.0
  },
  "Utwynn": {
    Lat: 50.0,
    Lon: -68.0
  },
  "Yorkon": {
    Lat: 51.0,
    Lon: -67.5
  },
  "Ormfal": {
    Lat: 52.5,
    Lon: -65.5
  },
  "Vocia Brevis": {
    Lat: 40.0,
    Lon: -76.0
  },
  "Vocia Sulturnus": {
    Lat: 34.0,
    Lon: -75.0
  },
  Test00: {
    Lat: 60.5,
    Lon: -102
  }
};

const authorsList = {
  Kiedis: "Kiedis",
  Aurvan: "Aurvan",
  Kilmoor: "Kilmoor",
  Orneh: "Orneh",
  Jessen: "Jessen",
  Ahatma: "Ahatma",
  Mayev: "Mayev",
  Galovia: "Galovia",
  Aebeth: "Aebeth",
  Faeriss: "Faeriss",
  Zirétha: "Zirétha",
  Elohandria: "Elohandria",
  Tehya: "Tehya",
  Egijebus: "Egijebus"
};

const kennyLoggins = [
  {name:"Mayev", ass:"fenix"},
  {name:"Kiedis", ass:"obelisk"},
  {name:"Aurvan", ass:"buttertops"},
  {name:"Kilmoor", ass:"lamentation"},
  {name:"Aebeth", ass:"cheer"},
  {name:"Faeriss", ass:"sokatoa"},
  {name:"Ziretha", ass:"hateful"},
  {name:"Elohandria", ass:"chance"},
  {name:"Roquesse", ass:"uniqua"}
];

const hoursList = {
  "12:00am": 0,
  "1:00am": 1,
  "2:00am": 2,
  "3:00am": 3,
  "4:00am": 4,
  "5:00am": 5,
  "6:00am": 6,
  "7:00am": 7,
  "8:00am": 8,
  "9:00am": 9,
  "10:00am": 10,
  "11:00am": 11,
  "12:00pm": 12,
  "1:00pm": 13,
  "2:00pm": 14,
  "3:00pm": 15,
  "4:00pm": 16,
  "5:00pm": 17,
  "6:00pm": 18,
  "7:00pm": 19,
  "8:00pm": 20,
  "9:00pm": 21,
  "10:00pm": 22,
  "11:00pm": 23
};

var goDatePicker = document.querySelector('.datepicker');

const oneDay = 86400001; //one day in milliseconds+1ms
const PI = Math.PI;
const rad = PI / 180; //to convert rdians to deg and back

var nameEntered = "nobody";//init
var topNav = document.getElementById("topNav");
var footerArea = document.getElementById("footerArea");

///////////////////////GROUP SHIT///////////////////////////////////////////////////////////////////////
function changeGroup() {
  console.log("in changeGroup()...");

}//end changeGroup


///////////////////////LOGGINS & MESSINA///////////////////////////////////////////////////////////////////////

function doLoggins(shit) {
  nameEntered = loginName.value;
  var passEntered = loginPass.value;
  var userRec = kennyLoggins.find(obj => {
    return obj.name === nameEntered
  })
  if (passEntered == userRec.ass) {
    console.log("Good shit, "+nameEntered);
    loggedIn.innerHTML = "Logged in as "+nameEntered;
    loginName.innerHTML = "";
    loginPass.innerHTML = "";

  } else {
    console.log("BAD shit, "+nameEntered);
    alert("Loggins failed! (Highway to the danger zone)")
    nameEntered = "nobody";
    loggedIn.innerHTML = "You're not logged in dumbass!";
  }

}


///////////////////////WEBSOCKET PING CHECKER///////////////////////////////////////////////////////////////////////

//var ponged = false;

var pinger = setInterval(function() {
  console.log("checking the sock...");

  if (theSock.readyState != WebSocket.OPEN) {
    console.log("the sock is not open!");

    //Set up alert state!!
    topNav.classList.remove("brown");
    footerArea.classList.remove("brown");
    loggedIn.innerHTML = "DISCONNECTED!!"
    topNav.classList.add("red");
    footerArea.classList.add("red");
  }

/*
  //alert("pinger every 5s")
  if (!ponged) {
    //uh oh never got a PONG after the last PING!
    //Set up alert state!!



  }
  console.log("sending PING...");
  ponged = false;//if the sock returns a PONG this will get set back to true
    //send the PING message to theSock (WebSocket Server)

    var newWSMessage = {
      Command: "LASTDATE",
      Data: theDate
    };
    */
/*
  var newWSMessage = {
    Command: "PING",
    Data: null
  };

  var JSONMess = JSON.stringify(newWSMessage);
  theSock.send(JSONMess);
 */
}, 120000);



///////////////////////DATE EXPERIMENTS///////////////////////////////////////////////////////////////////////
function sunStuff() {
  var sunPosDeg = getSunAlt(
    lastDate,
    locationsList["Test00"].Lat,
    locationsList["Test00"].Lon
  );
  var sinDay = lastDate.getUTCDate() + 1;
  var sinMonth = lastDate.getUTCMonth() + 1;
  var sinYear = lastDate.getUTCFullYear();

  //find rise and set times
  var sinTimeZone = Math.floor(locationsList["Test00"].Lon / 15);
  console.log(
    "inDay: " +
    sinDay +
    " inMonth: " +
    sinMonth +
    " inYear: " +
    sinYear +
    " inTimeZone: " +
    sinTimeZone +
    " Lat: " +
    locationsList["Test00"].Lat +
    "  Lon: " +
    locationsList["Test00"].Lon
  );
  var sunRec = find_sun_and_twi_events_for_date(
    mjd(inDay, inMonth, inYear, 0),
    inTimeZone,
    locationsList["Test00"].Lon,
    locationsList["Test00"].Lat
  );
  console.log(
    OLDfind_sun_and_twi_events_for_date(
      mjd(inDay, inMonth, inYear, 0),
      inTimeZone,
      locationsList["Test00"].Lon,
      locationsList["Test00"].Lat
    )
  );
  console.log("lastDate.getUTCHours(): " + lastDate.getUTCHours());
  console.log("sun altitude at this hour: " + sunPosDeg + "°");
} //end sunStuff

function sunStuff2() {
  /////////////////////////////////////////////////////////////////
  var Lat = locationsList["Test00"].Lat;
  var Lon = locationsList["Test00"].Lon;
  var thisTimeZone = Math.floor(locationsList["Test00"].Lon / 15);

  //var sunPosDeg = sunPosRad.altitude / rad;
  var dateDay = lastDate.getUTCDate() + 1;
  var dateMonth = lastDate.getUTCMonth() + 1;
  var dateYear = lastDate.getUTCFullYear();
  var dateHour = lastDate.getUTCHours();

  var MJD = mjd(dateDay, dateMonth, dateYear, 0);
  var otherDate = MJD - thisTimeZone / 24;

  var sglat = Math.sin(rad * Lat);
  var cglat = Math.cos(rad * Lat);

  //find rise and set times
  console.log(
    "dateDay: " +
    dateDay +
    " dateMonth: " +
    dateMonth +
    " dateYear: " +
    dateYear +
    " dateHour: " +
    dateHour +
    " thisTimeZone: " +
    thisTimeZone +
    " Lat: " +
    Lat +
    "  Lon: " +
    Lon
  );
  var sunRec = find_sun_and_twi_events_for_date(MJD, thisTimeZone, Lon, Lat);

  var sinOfAlt = sin_alt(2, otherDate, dateHour, Lon, cglat, sglat);
  var altRad = Math.asin(sinOfAlt); //in radians?
  var altDeg = altRad / rad; //in degrees!

  console.log(OLDfind_sun_and_twi_events_for_date(MJD, thisTimeZone, Lon, Lat));
  console.log("MJD: " + MJD);
  console.log("otherDate: " + otherDate);
  console.log("sglat: " + sglat);
  console.log("cglat: " + cglat);
  console.log("sinOfAlt: " + sinOfAlt);
  console.log("altRad: " + altRad);
  console.log("SO - sun altitude at this hour: " + altDeg + "°");
} //end sunStuff2

function makeDateSetterString(theDate, style) {
  //"2009-03-05" is what we're after here
  var monthPart = theDate.getUTCMonth() + 1;
  if (monthPart < 10) {
    monthPart = "0" + monthPart;
  }
  var dayPart = theDate.getUTCDate();
  if (dayPart < 10) {
    dayPart = "0" + dayPart;
  }
  if (style == "set") {
    return theDate.getUTCFullYear() + "-" + monthPart + "-" + dayPart;
  } else {
    return monthPart + "/" + dayPart + "/" + theDate.getUTCFullYear();
  } //end if else style
} //end makeDateSetterString

function runDateExperiments() {
  //NEEDs:
  //create a date (Object) from a string or other thing we read from mongoose
  //display that date prettily in HTML
  //set the date of an HTML date input field (from a date object)
  //add a day or days to a date object
  //use UTC? or figure out how timezones work
  //separate out the time from a date object
  //modify that time - or modify the time portion of a Data object
  //make sure that the date object is usable for Mongoose!!
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //create a date (Object) from a string or other thing we read from mongoose
  console.log("lastDate: " + lastDate.toUTCString()); //last date has been read from mongo - so this works!
  //NOTE: date is set and stored as GMT, so you have to read "toUTCString()" or it won't look right

  //display that date prettily in HTML
  var displayDate = document.getElementById("theDate");
  displayDate.innerHTML = makeDateSetterString(lastDate);

  //set the date of an HTML date input field (from a date object)
  //var changeDate = document.getElementById("changeDate");
  //changeDate.value = makeDateSetterString(lastDate, "set");

  //add a day or days to a date object
  var nextDayDate = new Date(lastDate.getTime() + oneDay); // + 1 day in ms
  var goDate = document.getElementById("goDate");
  goDate.value = makeDateSetterString(nextDayDate, "set");

  //use UTC? or figure out how timezones work
  //we are now using UTC, but should we add timezone support at some point?

  //separate out the time from a date object
  console.log("lastDate.getUTCHours(): " + lastDate.getUTCHours());
  //modify that time - or modify the time portion of a Data object
  lastDate.setUTCHours(15);
  console.log("lastDate with hours set to 15: " + lastDate.toUTCString());
  //make sure that the date object is usable for Mongoose!!
  //well we're getting data so I guess we're OK!
} //end experients
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//this is just a default value - hopefully overwritten on connection to the db
var temp = "1966-03-13".split("-");
var lastDate = new Date(temp[0], temp[1] - 1, temp[2]);
var lastDateId;

var displayDate = document.getElementById("theDate");
var displayDateObj = new Date(lastDate.toUTCString());
var displayDateRec = {
  Date: new Date(lastDate.toUTCString()),
  Month: displayDateObj.getMonth() + 1,
  Day: displayDateObj.getDate(),
  Year: displayDateObj.getFullYear()
};
//console.dir(displayDateRec);

/*
var changeDate = document.getElementById("changeDate");
changeDate.value = displayDateRec.Date.toUTCString();

var changeDateRec = {Month:changeDate.getMonth()+1, Day:changeDate.getDate(), Year:changeDate.getFullYear()};
var newEntry = document.getElementById("newEntry");
var newEntryRec = {Month:newEntry.getMonth()+1, Day:newEntry.getDate(), Year:newEntry.getFullYear()};
var goDate = document.getElementById("goDate");
var goDateRec = {Month:goDate.getMonth()+1, Day:goDate.getDate(), Year:goDate.getFullYear()};
*/

/*
getDate() // Returns the date
getMonth() // Returns the month
getFullYear() // Returns the year
*/
//var cardList = document.getElementById("cardList");
var cardList = document.getElementById("cardList");
//clear it out just to be sure
//clearcardList();//need to clear at some point!!

var controlTemplate = document.getElementById("controlTemplate");
var textTemplate = document.getElementById("textTemplate");
var writingItemTemplate = document.getElementById("writingItemTemplate"); //THIS APPEARS NOT TO BE GETTINg ASSIGNED

console.log("we are here!");
console.dir(writingItemTemplate);

//var weatherSelect = document.getElementById("weather");
//var temperatureSelect = document.getElementById("temperature");

var savedCursor;

var defaultRec = {
  WritingId: 666,
  Date: lastDate,
  Author: "Aurvan",
  Location: "Oldsea",
  Temperature: "Warm",
  Weather: "Clear",
  WritingContent: ""
};

var inDay;
var inMonth;
var inYear;
var inLat;
var inLon;
var inTimeZone;

var theSock;

function populateSelect(selector, options, type) {
  console.log("populating ");
  console.dir(selector);

  for (var i = 0; i < Object.keys(options).length; i++) {
    //add each option to the selector &
    //set the onClick for the selector
    var option = document.createElement("option");
    if (type == "location") {
      option.value = Object.keys(options)[i]; //locations just take the name as the value
    } else {
      option.value = Object.values(options)[i];
    } //end else not location
    option.text = Object.keys(options)[i];
    //selector.appendChild(option);
    selector.append(option);
  } //end for
  selector.setAttribute("value", type);
  selector.onchange = saveWriting; ///I don't think this is correct anymore
  $("select").formSelect(); //to force an update of the selectors
} // end populateSelect

async function startSetUp() {
  console.log("in startSetUp() ...");
  //set up connection to Web Socket
  //way old:
  //"ws://ec2-54-193-45-41.us-west-1.compute.amazonaws.com:8090"
  //sorta old:
  //"ws://ec2-54-183-136-214.us-west-1.compute.amazonaws.com:8090"

  //theSock = await new WebSocket('ws://localhost:8090');//when running local


  theSock = await new WebSocket(
    "ws://ec2-54-183-216-27.us-west-1.compute.amazonaws.com:8090"
  );
  
  theSock.onopen = function () {
    console.log("websocket is connected ...");
    topNav.classList.remove("red");
    footerArea.classList.remove("red");

    topNav.classList.add("brown");
    footerArea.classList.add("brown");
  };
  theSock.onmessage = function (ev) {
    console.log(ev);
    var coreMess = JSON.parse(ev.data);
    //DISPATCH COMMANDS
    if (coreMess.Command == "PUT") {
      /////////////////////////////////////////PUT/////////////////////////////////
      console.log("got a PUT with: ");
      console.dir(coreMess.Data);
      //var sortedWritings = sortWritings(coreMess.Data);
      //console.log("post sort: ");
      //console.dir(sortedWritings);
      //putWritings(sortedWritings);
      putWritings(coreMess.Data);
      console.log("about to check if theres any writings: ");
      console.dir(cardList.childNodes[2]);
      if (!cardList.childNodes[2]) {
        //nothing on this day so make a writing entry
        //newWriting();
      }
      //end 'PUT'
    } else if (coreMess.Command == "UPDATE") {
      ////////////////////////////////////////UPDATE////////////////////////
      //gotta populate the correct writing with the new data
      console.log("got a UPDATE with: ");
      console.dir(coreMess.Data);
      //find the correct writing div on the page and repop all the data

      var divToUpdate = document.getElementById(coreMess.Data[0]._id);
      updateWritings(divToUpdate, coreMess.Data[0]);
      //end UPDATE
    } else if (coreMess.Command == "DATE") {
      //this is called initially to set the date viewed to the lastDate (saved in the db)
      console.log("got a DATE with: ");
      console.dir(coreMess.Data[0]);
      lastDate = new Date(coreMess.Data[0].Date);
      lastDateId = coreMess.Data[0]._id;
      continueSetUp();
      //end DATE
    } else if (coreMess.Command == "PONG") {
      console.log("got PONG");
      ponged = true;

      //END PONG
    }
  };
} //end startSetUp

function continueSetUp() {
  displayDate.innerHTML =
    (lastDate.getMonth() + 1) +
    "/" +
    lastDate.getDate() +
    "/" +
    lastDate.getFullYear();

  M.Datepicker.getInstance(goDatePicker).setDate(new Date(2015, 7, 7), true);
  /*
    const PigPicker = document.querySelector(".datepicker");
    M.Datepicker.init(PigPicker, {
      //minDate: "01/01/2000",
      showClearBtn: true,
      yearRange: 100,
      onSelect: goToDate(new Date(PigPicker.value))
    });
  */

  //set up writing control panel
  console.dir(timeSelect);
  populateSelect(timeSelect, hoursList, "hour");
  populateSelect(authorSelect, authorsList, "author");
  populateSelect(locationSelect, locationsList, "location");

  //fetch writings for that date - theSock message handler will populate them
  var newWSMessage = {
    Command: "GET",
    Data: {
      Date: lastDate
    }
  };
  var JSONMess = JSON.stringify(newWSMessage);
  theSock.send(JSONMess);
  //do moon and sun times
  //runDateExperiments();
} //end continueSetUp()

function openDatePicker() {
  console.log("in openDatePicker() ...");
  M.Datepicker.getInstance(goDatePicker).open();
} //end openDatePicker()

function getBGImage(altDeg, weather) {
  //var cloudIndex = Math.floor(Math.random() * 11 + 1);

  //init
  var cloudIndex = 0;
  var sunIndex = 0;

  cloudIndex = weatherIndex[weather];

  if (altDeg < -18) {
    sunIndex = 11; //full night
  } else if (altDeg < -12) {
    sunIndex = 10; //twilight 3 or astronimical twilight
  } else if (altDeg < -6) {
    sunIndex = 9; //twilight 2 or nautical twilight
  } else if (altDeg < -0) {
    sunIndex = 8; //twilight 1 or civil twilight
  } else {
    // altDeg > 0 so the sun is actually up!
    var altRound = Math.floor(altDeg / 10);
    sunIndex = 7 - altRound;
  }
  var ImgFileName = "images/" + BGImages[sunIndex][cloudIndex] + ".png";
  console.log("ImgFileName is: " + ImgFileName);

  return ImgFileName;
} //end getBGImage

function sortWritingDivs() {
  console.log("in sortWritingDivs()...");
  //console.dir(cardList);

  var items = cardList.childNodes;
  var itemsArr = [];

  for (let i = 2; i < items.length; i++) {
    if (items[i].nodeType == 1) {
      // get rid of the whitespace text nodes
      itemsArr.push(items[i]);
    } //end if nodeType
  } //end for

  clearcardList();
  //console.log("post clearout...");
  //console.dir(cardList);
  //console.dir(itemsArr);

  itemsArr.sort((a, b) => {
    if (
      //location
      a.childNodes[1].childNodes[13].childNodes[1].value <
      b.childNodes[1].childNodes[13].childNodes[1].value
    ) {
      //console.log("a value: " + a.childNodes[1].childNodes[13].childNodes[1].value + " is less than b value: " + b.childNodes[1].childNodes[13].childNodes[1].value + " so -1");
      return -1;
    } else if (
      //location
      a.childNodes[1].childNodes[13].childNodes[1].value >
      b.childNodes[1].childNodes[13].childNodes[1].value
    ) {
      //console.log("a value: " + a.childNodes[1].childNodes[13].childNodes[1].value + " is more than b value: " + b.childNodes[1].childNodes[13].childNodes[1].value + " so +1");
      return 1;
    } else {
      //console.log("a value: " + a.childNodes[1].childNodes[13].childNodes[1].value + " is same as b value: " + b.childNodes[1].childNodes[13].childNodes[1].value + " so...");

      if (
        //date
        Number(a.childNodes[1].childNodes[9].childNodes[1].value) <
        Number(b.childNodes[1].childNodes[9].childNodes[1].value)
      ) {
        //console.log("a value: " + a.childNodes[1].childNodes[9].childNodes[1].value + " is less than b value: " + b.childNodes[1].childNodes[9].childNodes[1].value + " so -1");
        return -1;
      } else if (
        //date
        Number(a.childNodes[1].childNodes[9].childNodes[1].value) >
        Number(b.childNodes[1].childNodes[9].childNodes[1].value)
      ) {
        //console.log("a value: " + a.childNodes[1].childNodes[9].childNodes[1].value + " is more than b value: " + b.childNodes[1].childNodes[9].childNodes[1].value + " so +1");
        return 1;
      } else {
        return 0;
      } //end else date is same
    } //else author is same
  }); //end sort func
  //console.log("post sort of <divs>...");
  //console.dir(itemsArr);
  itemsArr.map(node => cardList.appendChild(node));
} //end sortWritingDivs()

function sortWritings(writings) {
  console.log("in sortWritings() with: ");
  console.dir(writings);
  var writingArray = [];
  for (var writing in writings) {
    writingArray.push(writings[writing]);
  } //end for - making array
  console.log("now writingArray is: ");
  console.dir(writingArray);
  writingArray.sort(function (a, b) {
    if (a.Author < b.Author) {
      return -1;
    } else if (a.Location > b.Location) {
      return 1;
    } else {
      if (a.Date < b.Date) {
        return -1;
      } else if (a.Date > b.Date) {
        return 1;
      } else {
        return 0;
      } //end else date is same
    } //else author is same
  }); //end sort func
  console.log("post sort writingArray is: ");
  console.dir(writingArray);
  return writingArray;
} //end sortWritings

function putWritings(writings) {
  console.log("in putWritings()...");

  for (var i = 0; i < writings.length; i++) {
    console.log("writings[i]:");
    console.dir(writings[i]);
    console.log("writings[i].Date:");
    console.dir(writings[i].Date);
    console.log("writings[i].Author:");
    console.dir(writings[i].Author);
    //and why isnt the big scrolling container being drawn?
if ((writings[i].Author == nameEntered) || (nameEntered == "Mayev")) {//WANT TODO CHECK GROUP TOO EVENTUALLY
    console.log("found WRITING FOR Author: "+writings[i].Author);

    //create a div
    var writingItem = writingItemTemplate.cloneNode(true); ///use to clone a new writing item
    writingItem.classList.remove("hide"); //make visible

    cardList.appendChild(writingItem); //writingItem added to the new cardList structure

    var timeSelect = writingItem.childNodes[1].childNodes[9].childNodes[1];
    var authorSelect = writingItem.childNodes[1].childNodes[11].childNodes[1];
    var locationSelect = writingItem.childNodes[1].childNodes[13].childNodes[1];
    var tempSelect = writingItem.childNodes[1].childNodes[5].childNodes[1];
    var weatherSelect = writingItem.childNodes[1].childNodes[7].childNodes[1];

    var textArea = writingItem.childNodes[5];

    writingItem.setAttribute("id", writings[i]._id); //ad the writing ID to the newly cloned div
    var nextDate = new Date(writings[i].Date);
    console.log("hours:");
    console.log(nextDate.getUTCHours());
    timeSelect.value = nextDate.getUTCHours(); //set the time control
    SelectItemByValue(authorSelect, writings[i].Author); //set the author control
    SelectItemByValue(locationSelect, writings[i].Location); //set the location control
    SelectItemByValue(weatherSelect, writings[i].Weather);
    SelectItemByValue(tempSelect, writings[i].Temperature);
    textArea.innerHTML = writings[i].WritingContent; //set the writing content

    var sunPosDeg = getSunAlt(
      nextDate,
      locationsList[locationSelect.options[locationSelect.selectedIndex].value]
      .Lat,
      locationsList[locationSelect.options[locationSelect.selectedIndex].value]
      .Lon
    );
    console.log("sun altitude at this hour: " + sunPosDeg + "°");

    //set the background image
    writingItem.childNodes[1].childNodes[1].src = getBGImage(
      sunPosDeg,
      writings[i].Weather
    );

    //Also update the default values
    defaultRec.Date = writings[i].Date;
    defaultRec.Author = writings[i].Author;
    defaultRec.Location = writings[i].Location;
    defaultRec.Temperature = writings[i].Temperature;
    defaultRec.Weather = writings[i].Weather;
    }//end if matching user!
  } //end for i

  if (cardList.childNodes[2]) {
    sortWritingDivs();
    console.log("after div sort in putWritings() cardLissssst:");
    //console.dir(cardList);
    doMoonsAndSunsPerLocation();
  }
  console.log("about to exit putWritings()");
} //end putWritings

function updateWritings(divToUpdate, updateData) {
  console.log("in updateWritings() with updateData...");
  console.dir(updateData);
  //var sortNoSort = updateData.Sort;
  //var actualData = updateData.Data;

  var timeSelect = divToUpdate.childNodes[1].childNodes[9].childNodes[1];
  var authorSelect = divToUpdate.childNodes[1].childNodes[11].childNodes[1];
  var locationSelect = divToUpdate.childNodes[1].childNodes[13].childNodes[1];
  var tempSelect = divToUpdate.childNodes[1].childNodes[5].childNodes[1];
  var weatherSelect = divToUpdate.childNodes[1].childNodes[7].childNodes[1];

  var textArea = divToUpdate.childNodes[5];
  var updateDATE = new Date(updateData.Date);
  console.dir(timeSelect.value);
  console.dir(updateDATE.getUTCHours());
  timeSelect.value = updateDATE.getUTCHours(); //set the time control
  SelectItemByValue(authorSelect, updateData.Author); //set the author control
  SelectItemByValue(locationSelect, updateData.Location); //set the location control
  textArea.innerHTML = updateData.WritingContent; //set the writing content
  SelectItemByValue(weatherSelect, updateData.Weather); //set Weather
  SelectItemByValue(tempSelect, updateData.Temperature); //set Temp
  setCurrentCursorPosition(textArea, savedCursor);
  /*
    if (sortNoSort) {
      //console.log("SORT DIVS because updateData.Sort = "+sortNoSort);
      //sortWritingDivs()
    } else {
      //console.log("NO SORT DIVS because updateData.Sort = "+sortNoSort);
    }
    */
  doMoonsAndSunsPerLocation();
} //end updateWritings

function newWriting(writingItem) {
  console.log("in newWriting()...");
  console.dir(writingItem);

  if (writingItem) {
    var lastHour = Number(
      writingItem.childNodes[1].childNodes[9].childNodes[1].value
    );
  } else {
    //no writingItem means make last hour -1
    lastHour = -1; //which will be midnight after we add 1 to it in a sec!
  }
  console.log("lastHour: " + lastHour);
  lastHour += 1;
  console.log("after +1 lastHour: " + lastHour);
  lastDate.setUTCHours(lastHour);
  console.log("lastDate with +1 hours: " + lastDate.toUTCString());
  defaultRec.Date = lastDate;
  /*
    var timeSelect = writingItem.childNodes[1].childNodes[9].childNodes[1];
    var authorSelect = writingItem.childNodes[1].childNodes[11].childNodes[1];
    var locationSelect = writingItem.childNodes[1].childNodes[13].childNodes[1];
    var tempSelect = writingItem.childNodes[1].childNodes[5].childNodes[1];
    var weatherSelect = writingItem.childNodes[1].childNodes[7].childNodes[1];
      */

  if (writingItem) {
    defaultRec.Author =
      writingItem.childNodes[1].childNodes[11].childNodes[1].value; //set the author value
    defaultRec.Location =
      writingItem.childNodes[1].childNodes[13].childNodes[1].value; //set the location value
    defaultRec.Weather =
      writingItem.childNodes[1].childNodes[7].childNodes[1].value; //set the weather value
    defaultRec.Temperature =
      writingItem.childNodes[1].childNodes[5].childNodes[1].value; //set the temp value
  } //end any child nodes
  //get default or last data
  //save data to mongo
  var newWSMessage = {
    Command: "NEW",
    Data: defaultRec
  };
  var JSONMess = JSON.stringify(newWSMessage);
  theSock.send(JSONMess);

  possibleLastDate(lastDate);

  doMoonsAndSunsPerLocation();

  //Mongo needs to "PUT" in response to our "NEW" so the new item should appear when that happens!
} //end newWriting

function updateWeather(theField, theValue) {
  console.log("in updateWeather()...");
  defaultRec[theField] = theValue;
  for (let i = 0; i < cardList.childNodes.length; i++) {
    if (cardList.childNodes[i].nodeType == 1) {
      // get rid of the whitespace text nodes

      var dataRec = {
        targetId: String(cardList.childNodes[i].id),
        targetField: theField,
        fieldValue: theValue
      };

      console.log("writingId: " + dataRec.targetId);
      console.log("theField: " + dataRec.targetField);
      console.log("theValue: " + dataRec.fieldValue);

      //send the UPDATE message to theSock (WebSocket Server)
      var newWSMessage = {
        Command: "UPDATE",
        Data: dataRec
      };
      var JSONMess = JSON.stringify(newWSMessage);
      theSock.send(JSONMess);
    } //end if nodeType is 1
  } //end for
} //end updateWeather

function update(writingId, theField, theValue, theElement) {
  console.log("in update()...");
  console.log("for id: " + writingId);
  if (theField != "WritingContent") {
    //Also update the default value
    defaultRec[theField] = theValue;
  } else {
    savedCursor = getCurrentCursorPosition(theElement.parentNode);
  }
  if (theField == "Time") {
    //Time is really Date - but it requires some special surgery!
    lastDate.setUTCHours(Number(theValue));
    theValue = lastDate;
    theField = "Date";
    //Resort the Divs! (writing items)
    sortWritingDivs();
  } //end if "Time"
  if (theField == "Location") {
    //Resort the Divs! (writing items)
    sortWritingDivs();
  } //end if "Time"

  if (theField == "Location" || theField == "Date" || theField == "Weather") {
    //update BG Image because the time, loc, or weather has changed!!
    var writingItem = document.getElementById(writingId);
    var locationSelect = writingItem.childNodes[1].childNodes[13].childNodes[1];
    var weatherSelect = writingItem.childNodes[1].childNodes[7].childNodes[1];
    var sunPosDeg = getSunAlt(
      lastDate,
      locationsList[locationSelect.options[locationSelect.selectedIndex].value]
      .Lat,
      locationsList[locationSelect.options[locationSelect.selectedIndex].value]
      .Lon
    );
    console.log("sun altitude at this new hour: " + sunPosDeg + "°");
    //set the background image
    writingItem.childNodes[1].childNodes[1].src = getBGImage(
      sunPosDeg,
      weatherSelect.value
    );
  } //end if Time, Location or Weather

  var dataRec = {
    targetId: String(writingId),
    targetField: theField,
    fieldValue: theValue
  };

  console.log("writingId: " + writingId);
  console.log("theField: " + theField);
  console.log("theValue: " + theValue);

  //send the UPDATE message to theSock (WebSocket Server)
  var newWSMessage = {
    Command: "UPDATE",
    Data: dataRec
  };
  var JSONMess = JSON.stringify(newWSMessage);
  theSock.send(JSONMess);

  doMoonsAndSunsPerLocation();
} //end update

function saveWriting() {
  console.log("in saveWriting...");
} //end saveWriting

function changeDates(toDate) {
  console.log("in changeDates...");
} //end changeDates

function newForDate(newDate) {
  console.log("in newForDate...");
  //go to new date if it's not this date
  if (!(newDate == lastDate)) {
    goToDate(newDate);
  }
  if (cardList.firstChild) {
    console.dir(cardList.firstChild);
    //there ARE no writing entries so make the first one
    newWriting(cardList.lastChild.childNodes[1].childNodes[5]);
  } else {
    //make new entry for newDate
    newWriting();
  } //end else
} //end newForDate

function clearcardList() {
  while (cardList.childNodes[2]) {
    //we start with 2 to preserve the template!
    cardList.removeChild(cardList.childNodes[2]);
  } //end while
} //end clearcardList

function goToDate(toDate) {
  console.log("in goToDate..." + toDate);
  //remove all writing entries 'cuse we're switching to a new day
  clearcardList();

  displayDate.innerHTML = makeDateSetterString(toDate);
  lastDate = toDate;
  lastDate.setUTCHours(0); //reset time to 12am
  //fetch writings for that date - theSock message handler will populate them
  var newWSMessage = {
    Command: "GET",
    Data: {
      Date: toDate
    }
  };
  var JSONMess = JSON.stringify(newWSMessage);
  theSock.send(JSONMess);
} //end goToDate

function getAll() {
  console.log("in getAll...");
  var newWSMessage = {
    Command: "ALL",
    Data: ""
  };
  var JSONMess = JSON.stringify(newWSMessage);
  theSock.send(JSONMess);
} //end getAll

function possibleLastDate(theDate) {
  console.log("in possibleLastDate...");
  var newWSMessage = {
    Command: "LASTDATE",
    Data: theDate
  };
  var JSONMess = JSON.stringify(newWSMessage);
  theSock.send(JSONMess);
} //end possibleLastDate

function doMoonsAndSunsPerLocation() {
  console.log("in doMoonsAndSunsPerLocation()...");
  //this assumes the records are sorted by LOCATION and then by TIME
  var lastLocation = "init";
  var currentLocation = "init";

  console.log("cardList.childNodes.length: " + cardList.childNodes.length);

  //we're only looking at the odd numbered children (which are the actual cards)
  //AND we're gonna start from 2 so we skip the template
  for (var i = 2; i < cardList.childNodes.length; i++) {
    var thisWritingEntry = cardList.childNodes[i];
    console.log("doMoonsAndSunsPerLocation is on cardList[" + i + "]");

    if (typeof thisWritingEntry == "undefined") {
      //Error, why are you calling this on an empty list?
    } else {
      //(typeof thisWritingEntry != "undefined")
      currentLocation =
        thisWritingEntry.childNodes[1].childNodes[13].childNodes[1].value;
      console.log(
        "TEST currentLocation" +
        currentLocation +
        " != lastLocation: " +
        lastLocation +
        "?"
      );
      if (currentLocation != lastLocation) {
        //This is first card of a new location!
        //need to call doMoon() & doSun() on this
        console.log(
          "••YES•• doMoonsAndSunsPerLocation is about to call doMoon() with start card:" +
          i
        );
        doMoon(thisWritingEntry, i);
        doSun(thisWritingEntry, i);
        lastLocation = currentLocation; //save this new location for next iteration
      } //end if new location
    } //end else thisWritingEntry actually exists
  } //end for i

  return 1; //ended normally
} //end doMoonsAndSunsPerLocation()

function findBestCardFor(eventType, eventTime, startCard) {
  //this thing returns the index of the best writing entry card to display a thing (like moonrise) that happens at a given hour
  //now that we're factoring in locations, we'll need to adjust to handle that
  console.log("in findBestCardFor() with: ");
  console.log("   eventType: " + eventType);
  console.log("   eventTime: " + eventTime);
  console.log("   startCard: " + startCard);

  //this assumes the records are sorted by LOCATION and then by TIME
  var originalLocation = "init";
  var lastOfTheLocation = startCard; //init to startCrad for now

  //FIRST PASS DOWN LIST to ERASE old rise & set notes of this type
  //AND to identify the end of this location
  for (var j = startCard; j < cardList.childNodes.length; j++) {
    var thisWritingEntry = cardList.childNodes[j];
    var nextWritingEntry = cardList.childNodes[j + 1];

    console.log("when j=" + j);
    console.log("thisWritingEntry: ");
    console.dir(thisWritingEntry);
    console.log("nextWritingEntry: ");
    console.dir(nextWritingEntry);

    lastOfTheLocation = j; //keep saving every j we visit while the location is the same

    //IF THERE IS EVEN A WRITING ENTRY HERE THE DO SOME SETUP
    if (typeof thisWritingEntry != "undefined") {
      var thisTimeSelect =
        thisWritingEntry.childNodes[1].childNodes[9].childNodes[1];
      var thisLocationSelect =
        thisWritingEntry.childNodes[1].childNodes[13].childNodes[1];
      if (originalLocation == "init") {
        originalLocation = thisLocationSelect.value;
      }
      //Clear any rise or set notes of our type out
      if (eventType == "moonrise") {
        thisWritingEntry.querySelector(".sunMoon").childNodes[3].innerHTML = ""; //3 is moonRise - clear current contents
      } else if (eventType == "moonset") {
        thisWritingEntry.querySelector(".sunMoon").childNodes[5].innerHTML = ""; //5 is moonSet - clear current contents
      } else if (eventType == "sunrise") {
        thisWritingEntry.querySelector(".sunMoon").childNodes[7].innerHTML = ""; //7 is sunRise - clear current contents
      } else if (eventType == "sunset") {
        thisWritingEntry.querySelector(".sunMoon").childNodes[9].innerHTML = ""; //9 is sunSet - clear current contents
      } // end clearing the current type of old event notes
    } //end there is a this writing entry

    //IF THERE IS A NEXT WRITING ENTRY AT ALL THEN DO SOME SETUP
    if (typeof nextWritingEntry != "undefined") {
      var nextLocationSelect =
        nextWritingEntry.childNodes[1].childNodes[13].childNodes[1];
      console.log("nextLocationSelect.value: " + nextLocationSelect.value);
    }
    console.log("originalLocation: " + originalLocation);

    if (
      typeof nextWritingEntry == "undefined" ||
      nextLocationSelect.value != originalLocation
    ) {
      console.log(
        "nextWritingEntry is UNDEFINED or different location, so going to SAVE this END OF LOCATION spot (" +
        lastOfTheLocation +
        ")"
      );
      break; //bad form BUT we can't go on counting up j's if the location has changed!
    } //end if reached an undefined or a change in location
  } //end for - move on to the next card!

  //console.log("length = "+cardList.childNodes.length);
  //we're only looking at the odd numbered children (which are the actual cards)
  //AND we're gonna start from 3 so we skip the template
  for (var i = startCard; i <= lastOfTheLocation; i++) {
    var thisWritingEntry = cardList.childNodes[i];
    var nextWritingEntry = cardList.childNodes[i + 1];

    console.log("when i=" + i);
    console.log("thisWritingEntry: ");
    console.dir(thisWritingEntry);
    console.log("nextWritingEntry: ");
    console.dir(nextWritingEntry);

    //IF THERE IS EVEN A WRITING ENTRY HERE THE DO SOME SETUP
    if (typeof thisWritingEntry != "undefined") {
      var thisTimeSelect =
        thisWritingEntry.childNodes[1].childNodes[9].childNodes[1];
    } //end there is a this writing entry

    //IF THERE IS A NEXT WRITING ENTRY AT ALL THEN DO SOME SETUP
    if (typeof nextWritingEntry != "undefined") {
      var nextTimeSelect =
        nextWritingEntry.childNodes[1].childNodes[9].childNodes[1];
    }

    if (typeof nextWritingEntry == "undefined" || i == lastOfTheLocation) {
      return i; //reached a last card so this must be the spot!
    } else if (Number(nextTimeSelect.value) > eventTime) {
      console.log(
        "nextTimeSelect.VALUE (" +
        nextTimeSelect.value +
        ") is > hour (" +
        eventTime +
        ")..."
      );
      console.log("so going to return this writing entry (" + i + ")");
      return i;
    }
  } //end for - move on to the next card!
  console.log("WHY I are about to return null?????????");
  return null;
} //end findBestCardFor

function getMoonPhase(year, month, day) {
  var c = (e = jd = b = 0);
  const phaseCount = 29;

  if (month < 3) {
    year--;
    month += 12;
  }

  ++month;

  c = 365.25 * year;

  e = 30.6 * month;

  jd = c + e + day - 694039.09; //jd is total days elapsed

  jd /= 29.5305882; //divide by the moon cycle

  b = parseInt(jd); //int(jd) -> b, take integer part of jd

  jd -= b; //subtract integer part to leave fractional part of original jd

  b = Math.round(jd * phaseCount); //scale fraction from 0-8 and round

  if (b >= phaseCount) {
    b = phaseCount; //0 and 8 are the same so turn 8 into 0
  }

  // 0 => New Moon
  // 1 => Waxing Crescent Moon
  // 2 => Quarter Moon
  // 3 => Waxing Gibbous Moon
  // 4 => Full Moon
  // 5 => Waning Gibbous Moon
  // 6 => Last Quarter Moon
  // 7 => Waning Crescent Moon

  console.log(b);

  return b;
} //end getMoonPhase

function doMoon(writing, cardNumb) {
  var moonImg = new Image();

  //get the date from the date input
  inDay = lastDate.getUTCDate() + 1;
  inMonth = lastDate.getUTCMonth() + 1;
  inYear = lastDate.getUTCFullYear();
  var thisPhase = getMoonPhase(inYear, inMonth, inDay);

  //get the lat long from the location
  var locationField = writing.childNodes[1].childNodes[13].childNodes[1];
  //console.log("YOOO0000000");
  //console.dir(locationField);
  inLat =
    locationsList[locationField.options[locationField.selectedIndex].value].Lat;
  inLon =
    locationsList[locationField.options[locationField.selectedIndex].value].Lon;
  inTimeZone = Math.floor(inLon / 15);

  //find rise and set times
  console.log(
    "inDay: " +
    inDay +
    " inMonth: " +
    inMonth +
    " inYear: " +
    inYear +
    " inTimeZone: " +
    inTimeZone +
    " inLon: " +
    inLon +
    "  inLat: " +
    inLat
  );
  var moonRec = find_moonrise_set(
    mjd(inDay, inMonth, inYear, 0),
    inTimeZone,
    inLon,
    inLat
  );
  console.log(
    OLDfind_moonrise_set(
      mjd(inDay, inMonth, inYear, 0),
      inTimeZone,
      inLon,
      inLat
    )
  );
  var moonRise12H;
  var moonRiseAMPM;
  var moonSet12H;
  var moonSetAMPM;
  var moonRiseMinString;
  var moonSetMinString;

  if (moonRec.rise.hours > 12) {
    moonRise12H = moonRec.rise.hours - 12;
    moonRiseAMPM = "pm";
  } else {
    moonRise12H = moonRec.rise.hours;
    moonRiseAMPM = "am";
  }

  if (moonRec.set.hours > 12) {
    moonSet12H = moonRec.set.hours - 12;
    moonSetAMPM = "pm";
  } else {
    moonSet12H = moonRec.set.hours;
    moonSetAMPM = "am";
  }

  if (moonRec.rise.minutes < 10) {
    moonRiseMinString = "0" + moonRec.rise.minutes;
  } else {
    moonRiseMinString = "" + moonRec.rise.minutes;
  }

  if (moonRec.set.minutes < 10) {
    moonSetMinString = "0" + moonRec.set.minutes;
  } else {
    moonSetMinString = "" + moonRec.set.minutes;
  }

  console.log(
    "Best Card for moon Rise is: " +
    findBestCardFor("moonrise", moonRec.rise.hours, cardNumb)
  );
  console.log(
    "Best Card for moon Set is: " +
    findBestCardFor("moonset", moonRec.set.hours, cardNumb)
  );

  //find Phase
  var phase = getMoonPhase(inYear, inMonth, inDay);
  moonImg.src = "images/moon" + phase + ".png";
  moonImg.onload = function () {
    //console.log("I'M FO REAL RISE!!!!!!!!!!!!!!!!!!!")
    cardList.childNodes[
        findBestCardFor("moonrise", moonRec.rise.hours, cardNumb)
      ].childNodes[3].childNodes[3].innerHTML =
      "moonrise " +
      moonRise12H +
      ":" +
      moonRiseMinString +
      moonRiseAMPM +
      " <img src='images/moon" +
      phase +
      ".png' alt='moon' height='15' width='15'>";
    //console.log("I'M FO REAL SET!!!!!!!!!!!!!!!!!!!")
    cardList.childNodes[
        findBestCardFor("moonset", moonRec.set.hours, cardNumb)
      ].childNodes[3].childNodes[5].innerHTML =
      "moonset " +
      moonSet12H +
      ":" +
      moonSetMinString +
      moonSetAMPM +
      " <img src='images/moon" +
      phase +
      ".png' alt='moon' height='15' width='15'>";
  }; //end onload

  /*
	//post them to a note area
	    moonImg.onload = function () {
			moonNote1.innerHTML = "moonrise "+moonRise12H+":"+moonRiseMinString+moonRiseAMPM+" <img src='/moon"+phase+".png' alt='moon' height='15' width='15'>";
			moonNote2.innerHTML = "moonset "+moonSet12H+":"+moonSetMinString+moonSetAMPM+" <img src='/moon"+phase+".png' alt='moon' height='15' width='15'>";
			//moonNote1.innerHTML="shit";
			console.log("moonNote1.innerHTML: "+moonNote1.innerHTML);
			console.log("moonNote2.innerHTML: "+moonNote2.innerHTML);
		}//end onload
		*/
} //end doMoon

function doSun(writing, cardNumb) {
  //get the date from the date input
  inDay = lastDate.getUTCDate() + 1;
  inMonth = lastDate.getUTCMonth() + 1;
  inYear = lastDate.getUTCFullYear();

  //get the lat long from the location
  var locationField = writing.childNodes[1].childNodes[13].childNodes[1];

  inLat =
    locationsList[locationField.options[locationField.selectedIndex].value].Lat;
  inLon =
    locationsList[locationField.options[locationField.selectedIndex].value].Lon;

  //find rise and set times
  inTimeZone = Math.floor(inLon / 15);
  console.log(
    "inDay: " +
    inDay +
    " inMonth: " +
    inMonth +
    " inYear: " +
    inYear +
    " inTimeZone: " +
    inTimeZone +
    " inLon: " +
    inLon +
    "  inLat: " +
    inLat
  );
  var sunRec = find_sun_and_twi_events_for_date(
    mjd(inDay, inMonth, inYear, 0),
    inTimeZone,
    inLon,
    inLat
  );
  console.log(
    OLDfind_sun_and_twi_events_for_date(
      mjd(inDay, inMonth, inYear, 0),
      inTimeZone,
      inLon,
      inLat
    )
  );
  var sunRise12H;
  var sunRiseAMPM;
  var sunSet12H;
  var sunSetAMPM;
  var sunRiseMinString;
  var sunSetMinString;

  if (sunRec.rise.hours > 12) {
    sunRise12H = sunRec.rise.hours - 12;
    sunRiseAMPM = "pm";
  } else {
    sunRise12H = sunRec.rise.hours;
    sunRiseAMPM = "am";
  }

  if (sunRec.set.hours > 12) {
    sunSet12H = sunRec.set.hours - 12;
    sunSetAMPM = "pm";
  } else {
    sunSet12H = sunRec.set.hours;
    sunSetAMPM = "am";
  }

  if (sunRec.rise.minutes < 10) {
    sunRiseMinString = "0" + sunRec.rise.minutes;
  } else {
    sunRiseMinString = "" + sunRec.rise.minutes;
  }

  if (sunRec.set.minutes < 10) {
    sunSetMinString = "0" + sunRec.set.minutes;
  } else {
    sunSetMinString = "" + sunRec.set.minutes;
  }

  //findBestCardFor(eventType, eventTime, startCard)

  console.log(
    "Best card for sun Rise is: " +
    findBestCardFor("sunrise", sunRec.rise.hours, cardNumb)
  );
  console.log(
    "Best card for sun Set is: " +
    findBestCardFor("sunset", sunRec.set.hours, cardNumb)
  );

  //post them to a note area

  //console.log("I'M FO REAL SUNRISE!!!!!!!!!!!!!!!!!!!")
  cardList.childNodes[
      findBestCardFor("sunrise", sunRec.rise.hours, cardNumb)
    ].childNodes[3].childNodes[7].innerHTML =
    "sunrise " + sunRise12H + ":" + sunRiseMinString + sunRiseAMPM;
  //console.log("I'M FO REAL SUNSET!!!!!!!!!!!!!!!!!!!")
  cardList.childNodes[
      findBestCardFor("sunset", sunRec.set.hours, cardNumb)
    ].childNodes[3].childNodes[9].innerHTML =
    "sunset " + sunSet12H + ":" + sunSetMinString + sunSetAMPM;
} //end doSun

// This is a translation of a set of routines from Montenbruck and Pfleger's
// Astonomy on the Computer 2nd english ed - see chapter 3.8 the sunset progrm
//

//
//	*** Main loop here ***
//

function Main(InForm) {
  var OutString = "";
  var calend;
  var quady = new Array();
  var sunp = new Array();
  var moonp = new Array();
  var y, m, day, glong, glat, tz, numday, mj, lst1, i;
  var rads = 0.0174532925,
    sinmoonalt;
  InForm.OutTable.value = "Calculating...";
  //
  // table header
  //
  HeadString =
    "             sun       c twi    n twi     a twi     moon\n" +
    "date        r    s   b    e    b    e    b    e     r    s\n" +
    "------------------------------------------------------------\n";
  //
  // key for bottom of table
  //
  KeyString =
    "\nKey\n.... means sun or moon below horizon all day or\n     twilight never begins\n" +
    "**** means sun or moon above horizon all day\n     or twilight never ends\n" +
    "---- in rise column means no rise that day and\n" +
    "     in set column - no set that day\n";

  //
  // parse the form to make sure the numbers are numbers and not strings!
  //
  y = parseInt(InForm.Year.value, 10);
  m = parseInt(InForm.Month.value, 10);
  day = parseInt(InForm.Day.value, 10);
  numday = parseInt(InForm.NumDays.value, 10);
  glong = parseFloat(InForm.Glong.value);
  glat = parseFloat(InForm.Glat.value);
  tz = parseFloat(InForm.TimeZone.value);

  //
  //  print the table header to the text area
  //
  InForm.OutTable.value = HeadString;

  //
  // main loop. All the work is done in the functions with the long names
  // find_sun_and_twi_events_for_date() and find_moonrise_set()
  //
  mj = mjd(day, m, y, 0.0);
  for (var i = 0; i < numday; i++) {
    InForm.OutTable.value +=
      caldat(mj + i) +
      " " +
      find_sun_and_twi_events_for_date(mj + i, tz, glong, glat) +
      " " +
      find_moonrise_set(mj + i, tz, glong, glat) +
      "\n";
  }

  //
  // writes key to the bottom of the table.
  //
  InForm.OutTable.value += KeyString;
} // end of main program

//
//  *** Functions go here - mostly adapted from Montenbruck and Pfleger section 3.8 ***
//

function hrsmin(hours) {
  //
  //	takes decimal hours and returns a string in hhmm format
  //
  var hrs, h, m, dum;
  hrs = Math.floor(hours * 60 + 0.5) / 60.0;
  h = Math.floor(hrs);
  m = Math.floor(60 * (hrs - h) + 0.5);
  dum = h * 100 + m;
  //
  // the jiggery pokery below is to make sure that two minutes past midnight
  // comes out as 0002 not 2. Javascript does not appear to have 'format codes'
  // like C
  //
  if (dum < 1000) dum = "0" + dum;
  if (dum < 100) dum = "0" + dum;
  if (dum < 10) dum = "0" + dum;
  return dum;
}

function hrsmin2(hours) {
  //
  //	takes decimal hours and returns a string in hhmm format
  //
  var hrs, h, m, dum;
  var hourMinRec = {
    hours: -100,
    minutes: -100
  };

  hrs = Math.floor(hours * 60 + 0.5) / 60.0;
  h = Math.floor(hrs);
  m = Math.floor(60 * (hrs - h) + 0.5);
  //dum = h*100 + m;
  hourMinRec.hours = h;
  hourMinRec.minutes = m;
  //
  // the jiggery pokery below is to make sure that two minutes past midnight
  // comes out as 0002 not 2. Javascript does not appear to have 'format codes'
  // like C
  //
  //if (dum < 1000) dum = "0" + dum;
  //if (dum <100) dum = "0" + dum;
  //if (dum < 10) dum = "0" + dum;
  return hourMinRec;
}

function ipart(x) {
  //
  //	returns the integer part - like int() in basic
  //
  var a;
  if (x > 0) {
    a = Math.floor(x);
  } else {
    a = Math.ceil(x);
  }
  return a;
}

function frac(x) {
  //
  //	returns the fractional part of x as used in minimoon and minisun
  //
  var a;
  a = x - Math.floor(x);
  if (a < 0) a += 1;
  return a;
}

//
// round rounds the number num to dp decimal places
// the second line is some C like jiggery pokery I
// found in an OReilly book which means if dp is null
// you get 2 decimal places.
//
function round(num, dp) {
  //   dp = (!dp ? 2: dp);
  return Math.round(num * Math.pow(10, dp)) / Math.pow(10, dp);
}

function range(x) {
  //
  //	returns an angle in degrees in the range 0 to 360
  //
  var a, b;
  b = x / 360;
  a = 360 * (b - ipart(b));
  if (a < 0) {
    a = a + 360;
  }
  return a;
}

function mjd(day, month, year, hour) {
  //
  //	Takes the day, month, year and hours in the day and returns the
  //  modified julian day number defined as mjd = jd - 2400000.5
  //  checked OK for Greg era dates - 26th Dec 02
  //
  var a, b;
  if (month <= 2) {
    month = month + 12;
    year = year - 1;
  }
  a = 10000.0 * year + 100.0 * month + day;
  if (a <= 15821004.1) {
    b = -2 * Math.floor((year + 4716) / 4) - 1179;
  } else {
    b = Math.floor(year / 400) - Math.floor(year / 100) + Math.floor(year / 4);
  }
  a = 365.0 * year - 679004.0;
  return a + b + Math.floor(30.6001 * (month + 1)) + day + hour / 24.0;
}

function caldat(mjd) {
  //
  //	Takes mjd and returns the civil calendar date in Gregorian calendar
  //  as a string in format yyyymmdd.hhhh
  //  looks OK for Greg era dates  - not good for earlier - 26th Dec 02
  //
  var calout;
  var b, d, f, jd, jd0, c, e, day, month, year, hour;
  jd = mjd + 2400000.5;
  jd0 = Math.floor(jd + 0.5);
  if (jd0 < 2299161.0) {
    c = jd0 + 1524.0;
  } else {
    b = Math.floor((jd0 - 1867216.25) / 36524.25);
    c = jd0 + (b - Math.floor(b / 4)) + 1525.0;
  }
  d = Math.floor((c - 122.1) / 365.25);
  e = 365.0 * d + Math.floor(d / 4);
  f = Math.floor((c - e) / 30.6001);
  day = Math.floor(c - e + 0.5) - Math.floor(30.6001 * f);
  month = f - 1 - 12 * Math.floor(f / 14);
  year = d - 4715 - Math.floor((7 + month) / 10);
  hour = 24.0 * (jd + 0.5 - jd0);
  hour = hrsmin(hour);
  calout = round(year * 10000.0 + month * 100.0 + day + hour / 10000, 4);
  return calout + ""; //making sure calout is a string
}

function quad(ym, yz, yp) {
  //
  //	finds the parabola throuh the three points (-1,ym), (0,yz), (1, yp)
  //  and returns the coordinates of the max/min (if any) xe, ye
  //  the values of x where the parabola crosses zero (roots of the quadratic)
  //  and the number of roots (0, 1 or 2) within the interval [-1, 1]
  //
  //	well, this routine is producing sensible answers
  //
  //  results passed as array [nz, z1, z2, xe, ye]
  //
  var nz, a, b, c, dis, dx, xe, ye, z1, z2, nz;
  var quadout = new Array();

  nz = 0;
  a = 0.5 * (ym + yp) - yz;
  b = 0.5 * (yp - ym);
  c = yz;
  xe = -b / (2 * a);
  ye = (a * xe + b) * xe + c;
  dis = b * b - 4.0 * a * c;
  if (dis > 0) {
    dx = (0.5 * Math.sqrt(dis)) / Math.abs(a);
    z1 = xe - dx;
    z2 = xe + dx;
    if (Math.abs(z1) <= 1.0) nz += 1;
    if (Math.abs(z2) <= 1.0) nz += 1;
    if (z1 < -1.0) z1 = z2;
  }
  quadout[0] = nz;
  quadout[1] = z1;
  quadout[2] = z2;
  quadout[3] = xe;
  quadout[4] = ye;
  return quadout;
}

function lmst(mjd, glong) {
  //
  //	Takes the mjd and the longitude (west negative) and then returns
  //  the local sidereal time in hours. Im using Meeus formula 11.4
  //  instead of messing about with UTo and so on
  //
  var lst, t, d;
  d = mjd - 51544.5;
  t = d / 36525.0;
  lst = range(
    280.46061837 +
    360.98564736629 * d +
    0.000387933 * t * t -
    (t * t * t) / 38710000
  );
  return lst / 15.0 + glong / 15;
}

function minisun(t) {
  //
  //	returns the ra and dec of the Sun in an array called suneq[]
  //  in decimal hours, degs referred to the equinox of date and using
  //  obliquity of the ecliptic at J2000.0 (small error for +- 100 yrs)
  //	takes t centuries since J2000.0. Claimed good to 1 arcmin
  //
  var p2 = 6.283185307,
    coseps = 0.91748,
    sineps = 0.39778;
  var L, M, DL, SL, X, Y, Z, RHO, ra, dec;
  var suneq = new Array();

  M = p2 * frac(0.993133 + 99.997361 * t);
  DL = 6893.0 * Math.sin(M) + 72.0 * Math.sin(2 * M);
  L = p2 * frac(0.7859453 + M / p2 + (6191.2 * t + DL) / 1296000);
  SL = Math.sin(L);
  X = Math.cos(L);
  Y = coseps * SL;
  Z = sineps * SL;
  RHO = Math.sqrt(1 - Z * Z);
  dec = (360.0 / p2) * Math.atan(Z / RHO);
  ra = (48.0 / p2) * Math.atan(Y / (X + RHO));
  if (ra < 0) ra += 24;
  suneq[1] = dec;
  suneq[2] = ra;
  return suneq;
}

function minimoon(t) {
  //
  // takes t and returns the geocentric ra and dec in an array mooneq
  // claimed good to 5' (angle) in ra and 1' in dec
  // tallies with another approximate method and with ICE for a couple of dates
  //
  var p2 = 6.283185307,
    arc = 206264.8062,
    coseps = 0.91748,
    sineps = 0.39778;
  var L0, L, LS, F, D, H, S, N, DL, CB, L_moon, B_moon, V, W, X, Y, Z, RHO;
  var mooneq = new Array();

  L0 = frac(0.606433 + 1336.855225 * t); // mean longitude of moon
  L = p2 * frac(0.374897 + 1325.55241 * t); //mean anomaly of Moon
  LS = p2 * frac(0.993133 + 99.997361 * t); //mean anomaly of Sun
  D = p2 * frac(0.827361 + 1236.853086 * t); //difference in longitude of moon and sun
  F = p2 * frac(0.259086 + 1342.227825 * t); //mean argument of latitude

  // corrections to mean longitude in arcsec
  DL = 22640 * Math.sin(L);
  DL += -4586 * Math.sin(L - 2 * D);
  DL += +2370 * Math.sin(2 * D);
  DL += +769 * Math.sin(2 * L);
  DL += -668 * Math.sin(LS);
  DL += -412 * Math.sin(2 * F);
  DL += -212 * Math.sin(2 * L - 2 * D);
  DL += -206 * Math.sin(L + LS - 2 * D);
  DL += +192 * Math.sin(L + 2 * D);
  DL += -165 * Math.sin(LS - 2 * D);
  DL += -125 * Math.sin(D);
  DL += -110 * Math.sin(L + LS);
  DL += +148 * Math.sin(L - LS);
  DL += -55 * Math.sin(2 * F - 2 * D);

  // simplified form of the latitude terms
  S = F + (DL + 412 * Math.sin(2 * F) + 541 * Math.sin(LS)) / arc;
  H = F - 2 * D;
  N = -526 * Math.sin(H);
  N += +44 * Math.sin(L + H);
  N += -31 * Math.sin(-L + H);
  N += -23 * Math.sin(LS + H);
  N += +11 * Math.sin(-LS + H);
  N += -25 * Math.sin(-2 * L + F);
  N += +21 * Math.sin(-L + F);

  // ecliptic long and lat of Moon in rads
  L_moon = p2 * frac(L0 + DL / 1296000);
  B_moon = (18520.0 * Math.sin(S) + N) / arc;

  // equatorial coord conversion - note fixed obliquity
  CB = Math.cos(B_moon);
  X = CB * Math.cos(L_moon);
  V = CB * Math.sin(L_moon);
  W = Math.sin(B_moon);
  Y = coseps * V - sineps * W;
  Z = sineps * V + coseps * W;
  RHO = Math.sqrt(1.0 - Z * Z);
  dec = (360.0 / p2) * Math.atan(Z / RHO);
  ra = (48.0 / p2) * Math.atan(Y / (X + RHO));
  if (ra < 0) ra += 24;
  mooneq[1] = dec;
  mooneq[2] = ra;
  return mooneq;
}

function sin_alt(iobj, mjd0, hour, glong, cglat, sglat) {
  //
  //	this rather mickey mouse function takes a lot of
  //  arguments and then returns the sine of the altitude of
  //  the object labelled by iobj. iobj = 1 is moon, iobj = 2 is sun
  //
  var mjd,
    t,
    ra,
    dec,
    tau,
    salt,
    rads = 0.0174532925;
  var objpos = new Array();
  mjd = mjd0 + hour / 24.0;
  t = (mjd - 51544.5) / 36525.0;
  if (iobj == 1) {
    objpos = minimoon(t);
  } else {
    objpos = minisun(t);
  }
  ra = objpos[2];
  dec = objpos[1];
  // hour angle of object
  tau = 15.0 * (lmst(mjd, glong) - ra);
  // sin(alt) of object using the conversion formulas
  salt =
    sglat * Math.sin(rads * dec) +
    cglat * Math.cos(rads * dec) * Math.cos(rads * tau);
  return salt;
}

function OLDfind_sun_and_twi_events_for_date(mjd, tz, glong, glat) {
  //
  //	this is my attempt to encapsulate most of the program in a function
  //	then this function can be generalised to find all the Sun events.
  //
  //
  var sglong, sglat, date, ym, yz, above, utrise, utset, j;
  var yp,
    nz,
    rise,
    sett,
    hour,
    z1,
    z2,
    iobj,
    rads = 0.0174532925;
  var quadout = new Array();
  var sinho = new Array();
  var always_up = " ****";
  var always_down = " ....";
  var outstring = "";
  var sunRec = {
    rise: {
      hours: -666,
      minutes: -666
    },
    twilight: {
      hours: -666,
      minuutes: -666
    },
    set: {
      hours: -666,
      minutes: -666
    }
  };
  //
  //	Set up the array with the 4 values of sinho needed for the 4
  //      kinds of sun event
  //
  sinho[0] = Math.sin(rads * -0.833); //sunset upper limb simple refraction
  sinho[1] = Math.sin(rads * -6.0); //civil twi
  sinho[2] = Math.sin(rads * -12.0); //nautical twi
  sinho[3] = Math.sin(rads * -18.0); //astro twi
  sglat = Math.sin(rads * glat);
  cglat = Math.cos(rads * glat);
  date = mjd - tz / 24;
  //
  //	main loop takes each value of sinho in turn and finds the rise/set
  //      events associated with that altitude of the Sun
  //
  for (var j = 0; j < 4; j++) {
    rise = false;
    sett = false;
    above = false;
    hour = 1.0;
    ym = sin_alt(2, date, hour - 1.0, glong, cglat, sglat) - sinho[j];
    if (ym > 0.0) above = true;
    //
    // the while loop finds the sin(alt) for sets of three consecutive
    // hours, and then tests for a single zero crossing in the interval
    // or for two zero crossings in an interval or for a grazing event
    // The flags rise and sett are set accordingly
    //
    while (hour < 25 && (sett == false || rise == false)) {
      yz = sin_alt(2, date, hour, glong, cglat, sglat) - sinho[j];
      yp = sin_alt(2, date, hour + 1.0, glong, cglat, sglat) - sinho[j];
      quadout = quad(ym, yz, yp);
      nz = quadout[0];
      z1 = quadout[1];
      z2 = quadout[2];
      xe = quadout[3];
      ye = quadout[4];

      // case when one event is found in the interval
      if (nz == 1) {
        if (ym < 0.0) {
          utrise = hour + z1;
          rise = true;
        } else {
          utset = hour + z1;
          sett = true;
        }
      } // end of nz = 1 case

      // case where two events are found in this interval
      // (rare but whole reason we are not using simple iteration)
      if (nz == 2) {
        if (ye < 0.0) {
          utrise = hour + z2;
          utset = hour + z1;
        } else {
          utrise = hour + z1;
          utset = hour + z2;
        }
      } // end of nz = 2 case

      // set up the next search interval
      ym = yp;
      hour += 2.0;
    } // end of while loop
    //
    // now search has completed, we compile the string to pass back
    // to the main loop. The string depends on several combinations
    // of the above flag (always above or always below) and the rise
    // and sett flags
    //
    /*
		Key
		.... means sun or moon below horizon all day or
		     twilight never begins
		**** means sun or moon above horizon all day
		     or twilight never ends
		---- in rise column means no rise that day and
		     in set column - no set that day
		*/

    if (rise == true || sett == true) {
      if (rise == true) outstring += " " + hrsmin(utrise);
      else outstring += " ----";
      if (sett == true) outstring += " " + hrsmin(utset);
      else outstring += " ----";
    } else {
      if (above == true) outstring += always_up + always_up;
      else outstring += always_down + always_down;
    }

    /*				

					if (rise == true || sett == true ) {
						if (rise == true) sunRec.rise = hrsmin2(utrise);
						else sunRec.rise={"hours":-1, "minutes":-1};
						if (sett == true) sunRec.set = hrsmin2(utset);
						else sunRec.set={"hours":-1, "minutes":-1};
						}
					else {
						if (above == true) sunRec.rise={"hours":100, "minutes":100};
						else sunRec.rise={"hours":-100, "minutes":-100};
						}
		*/
  } // end of for loop - next condition

  return outstring;
  //return sunRec;
} //end OLDsun

function OLDfind_moonrise_set(mjd, tz, glong, glat) {
  //
  //	Im using a separate function for moonrise/set to allow for different tabulations
  //  of moonrise and sun events ie weekly for sun and daily for moon. The logic of
  //  the function is identical to find_sun_and_twi_events_for_date()
  //
  var sglong, sglat, date, ym, yz, above, utrise, utset, j;
  var yp,
    nz,
    rise,
    sett,
    hour,
    z1,
    z2,
    iobj,
    rads = 0.0174532925;
  var quadout = new Array();
  var sinho;
  var always_up = " ****";
  var always_down = " ....";
  var outstring = "";
  var moonRec = {
    rise: {
      hours: -666,
      minuutes: -666
    },
    set: {
      hours: -666,
      minuutes: -666
    }
  };

  sinho = Math.sin((rads * 8) / 60); //moonrise taken as centre of moon at +8 arcmin
  sglat = Math.sin(rads * glat);
  cglat = Math.cos(rads * glat);
  date = mjd - tz / 24;
  rise = false;
  sett = false;
  above = false;
  hour = 1.0;
  ym = sin_alt(1, date, hour - 1.0, glong, cglat, sglat) - sinho;
  if (ym > 0.0) above = true;
  while (hour < 25 && (sett == false || rise == false)) {
    yz = sin_alt(1, date, hour, glong, cglat, sglat) - sinho;
    yp = sin_alt(1, date, hour + 1.0, glong, cglat, sglat) - sinho;
    quadout = quad(ym, yz, yp);
    nz = quadout[0];
    z1 = quadout[1];
    z2 = quadout[2];
    xe = quadout[3];
    ye = quadout[4];

    // case when one event is found in the interval
    if (nz == 1) {
      if (ym < 0.0) {
        utrise = hour + z1;
        rise = true;
      } else {
        utset = hour + z1;
        sett = true;
      }
    } // end of nz = 1 case

    // case where two events are found in this interval
    // (rare but whole reason we are not using simple iteration)
    if (nz == 2) {
      if (ye < 0.0) {
        utrise = hour + z2;
        utset = hour + z1;
      } else {
        utrise = hour + z1;
        utset = hour + z2;
      }
    }

    // set up the next search interval
    ym = yp;
    hour += 2.0;
  } // end of while loop
  /*
				Key
	.... means sun or moon below horizon all day or
	     twilight never begins
	**** means sun or moon above horizon all day
	     or twilight never ends
	---- in rise column means no rise that day and
	     in set column - no set that day
	*/

  if (rise == true || sett == true) {
    if (rise == true) outstring += " " + hrsmin(utrise);
    else outstring += " ----";
    if (sett == true) outstring += " " + hrsmin(utset);
    else outstring += " ----";
  } else {
    if (above == true) outstring += always_up + always_up;
    else outstring += always_down + always_down;
  }
  /*
				if (rise == true || sett == true ) {
					if (rise == true) moonRec.rise = hrsmin2(utrise);
					else moonRec.rise={"hours":-1, "minutes":-1};
					if (sett == true) moonRec.set = hrsmin2(utset);
					else moonRec.set={"hours":-1, "minutes":-1};
					}
				else {
					if (above == true) moonRec.rise={"hours":100, "minutes":100};
					else moonRec.rise={"hours":-100, "minutes":-100};
					}

	*/

  return outstring;
  //return moonRec;
} //end old moon calc

function find_sun_and_twi_events_for_date(mjd, tz, glong, glat) {
  //
  //	this is my attempt to encapsulate most of the program in a function
  //	then this function can be generalised to find all the Sun events.
  //
  //
  var sglong, sglat, date, ym, yz, above, utrise, utset, j;
  var yp,
    nz,
    rise,
    sett,
    hour,
    z1,
    z2,
    iobj,
    rads = 0.0174532925;
  var quadout = new Array();
  var sinho = new Array();
  var always_up = " ****";
  var always_down = " ....";
  var outstring = "";
  var sunRec = {
    predawn: {
      hours: -666,
      minutes: -666
    },
    rise: {
      hours: -666,
      minutes: -666
    },
    twilight: {
      hours: -666,
      minutes: -666
    },
    set: {
      hours: -666,
      minutes: -666
    }
  };
  const ordinalsForSunRec = ["rise", "set", "predawn", "twilight"];

  //
  //	Set up the array with the 4 values of sinho needed for the 4
  //      kinds of sun event
  //
  sinho[0] = Math.sin(rads * -0.833); //sunset upper limb simple refraction
  sinho[1] = Math.sin(rads * -6.0); //civil twi
  sinho[2] = Math.sin(rads * -12.0); //nautical twi
  sinho[3] = Math.sin(rads * -18.0); //astro twi
  sglat = Math.sin(rads * glat);
  cglat = Math.cos(rads * glat);
  date = mjd - tz / 24;
  const sunEventCount = 2; //1= sunrise/set only, 2=also civil twilight, 3 = also naut twilight, 4 = also astro twilight
  //
  //	main loop takes each value of sinho in turn and finds the rise/set
  //      events associated with that altitude of the Sun

  for (var sunEvent = 0; sunEvent < sunEventCount; sunEvent++) {
    rise = false;
    sett = false;
    above = false;
    hour = 1.0;
    ym = sin_alt(2, date, hour - 1.0, glong, cglat, sglat) - sinho[j];
    if (ym > 0.0) above = true;
    //
    // the while loop finds the sin(alt) for sets of three consecutive
    // hours, and then tests for a single zero crossing in the interval
    // or for two zero crossings in an interval or for a grazing event
    // The flags rise and sett are set accordingly
    //
    while (hour < 25 && (sett == false || rise == false)) {
      yz = sin_alt(2, date, hour, glong, cglat, sglat) - sinho[sunEvent];
      yp = sin_alt(2, date, hour + 1.0, glong, cglat, sglat) - sinho[sunEvent];
      quadout = quad(ym, yz, yp);
      nz = quadout[0];
      z1 = quadout[1];
      z2 = quadout[2];
      xe = quadout[3];
      ye = quadout[4];

      // case when one event is found in the interval
      if (nz == 1) {
        if (ym < 0.0) {
          utrise = hour + z1;
          rise = true;
        } else {
          utset = hour + z1;
          sett = true;
        }
      } // end of nz = 1 case

      // case where two events are found in this interval
      // (rare but whole reason we are not using simple iteration)
      if (nz == 2) {
        if (ye < 0.0) {
          utrise = hour + z2;
          utset = hour + z1;
        } else {
          utrise = hour + z1;
          utset = hour + z2;
        }
      } // end of nz = 2 case

      // set up the next search interval
      ym = yp;
      hour += 2.0;
    } // end of while loop
    //
    // now search has completed, we compile the string to pass back
    // to the main loop. The string depends on several combinations
    // of the above flag (always above or always below) and the rise
    // and sett flags
    //
    /*
		Key
		.... means sun or moon below horizon all day or
		     twilight never begins
		**** means sun or moon above horizon all day
		     or twilight never ends
		---- in rise column means no rise that day and
		     in set column - no set that day
		*/
    /*

					if (rise == true || sett == true ) {
						if (rise == true) outstring += " " + hrsmin(utrise);
						else outstring += " ----";
						if (sett == true) outstring += " " + hrsmin(utset);
						else outstring += " ----";
						}
					else {
						if (above == true) outstring += always_up + always_up;
						else outstring += always_down + always_down;
						}
		*/

    var whichRec = sunEvent * 2; //the index of the property name we want to set in ordinalsForSunRec[]
    if (rise == true || sett == true) {
      if (rise == true) sunRec[ordinalsForSunRec[whichRec]] = hrsmin2(utrise);
      else
        sunRec.rise = {
          hours: -1,
          minutes: -1
        };
      if (sett == true)
        sunRec[ordinalsForSunRec[whichRec + 1]] = hrsmin2(utset);
      else
        sunRec.set = {
          hours: -1,
          minutes: -1
        };
    } else {
      if (above == true)
        sunRec[ordinalsForSunRec[whichRec]] = {
          hours: 100,
          minutes: 100
        };
      else
        sunRec[ordinalsForSunRec[whichRec]] = {
          hours: -100,
          minutes: -100
        };
    }
  } // end of for loop - next condition (next SunEvent)

  //return outstring;
  return sunRec;
} //end sun

function find_moonrise_set(mjd, tz, glong, glat) {
  //
  //	Im using a separate function for moonrise/set to allow for different tabulations
  //  of moonrise and sun events ie weekly for sun and daily for moon. The logic of
  //  the function is identical to find_sun_and_twi_events_for_date()
  //
  var sglong, sglat, date, ym, yz, above, utrise, utset, j;
  var yp,
    nz,
    rise,
    sett,
    hour,
    z1,
    z2,
    iobj,
    rads = 0.0174532925;
  var quadout = new Array();
  var sinho;
  var always_up = " ****";
  var always_down = " ....";
  var outstring = "";
  var moonRec = {
    rise: {
      hours: -666,
      minuutes: -666
    },
    set: {
      hours: -666,
      minuutes: -666
    }
  };

  sinho = Math.sin((rads * 8) / 60); //moonrise taken as centre of moon at +8 arcmin
  sglat = Math.sin(rads * glat);
  cglat = Math.cos(rads * glat);
  date = mjd - tz / 24;
  rise = false;
  sett = false;
  above = false;
  hour = 1.0;
  ym = sin_alt(1, date, hour - 1.0, glong, cglat, sglat) - sinho;
  if (ym > 0.0) above = true;
  while (hour < 25 && (sett == false || rise == false)) {
    yz = sin_alt(1, date, hour, glong, cglat, sglat) - sinho;
    yp = sin_alt(1, date, hour + 1.0, glong, cglat, sglat) - sinho;
    quadout = quad(ym, yz, yp);
    nz = quadout[0];
    z1 = quadout[1];
    z2 = quadout[2];
    xe = quadout[3];
    ye = quadout[4];

    // case when one event is found in the interval
    if (nz == 1) {
      if (ym < 0.0) {
        utrise = hour + z1;
        rise = true;
      } else {
        utset = hour + z1;
        sett = true;
      }
    } // end of nz = 1 case

    // case where two events are found in this interval
    // (rare but whole reason we are not using simple iteration)
    if (nz == 2) {
      if (ye < 0.0) {
        utrise = hour + z2;
        utset = hour + z1;
      } else {
        utrise = hour + z1;
        utset = hour + z2;
      }
    }

    // set up the next search interval
    ym = yp;
    hour += 2.0;
  } // end of while loop
  /*
				Key
	.... means sun or moon below horizon all day or
	     twilight never begins
	**** means sun or moon above horizon all day
	     or twilight never ends
	---- in rise column means no rise that day and
	     in set column - no set that day
	*/
  /*
				if (rise == true || sett == true ) {
					if (rise == true) outstring += " " + hrsmin(utrise);
					else outstring += " ----";
					if (sett == true) outstring += " " + hrsmin(utset);
					else outstring += " ----";
					}
				else {
					if (above == true) outstring += always_up + always_up;
					else outstring += always_down + always_down;
					}
	*/

  if (rise == true || sett == true) {
    if (rise == true) moonRec.rise = hrsmin2(utrise);
    else
      moonRec.rise = {
        hours: -1,
        minutes: -1
      };
    if (sett == true) moonRec.set = hrsmin2(utset);
    else
      moonRec.set = {
        hours: -1,
        minutes: -1
      };
  } else {
    if (above == true)
      moonRec.rise = {
        hours: 100,
        minutes: 100
      };
    else
      moonRec.rise = {
        hours: -100,
        minutes: -100
      };
  }
  //return outstring;
  return moonRec;
}

/////////////////////////////SUN POSITION FUNCTIONS AND STUFF////////////////////////////////////
function getSunAlt(inDate, Lat, Lon) {
  const DBuggins = true;
  var thisTimeZone = Math.floor(Lon / 15);

  //var sunPosDeg = sunPosRad.altitude / rad;
  var dateDay = inDate.getUTCDate() + 1;
  var dateMonth = inDate.getUTCMonth() + 1;
  var dateYear = inDate.getUTCFullYear();
  var dateHour = inDate.getUTCHours();

  var MJD = mjd(dateDay, dateMonth, dateYear, 0);
  var otherDate = MJD - thisTimeZone / 24;

  var sglat = Math.sin(rad * Lat);
  var cglat = Math.cos(rad * Lat);

  var sunRec = find_sun_and_twi_events_for_date(MJD, thisTimeZone, Lon, Lat);

  var sinOfAlt = sin_alt(2, otherDate, dateHour, Lon, cglat, sglat);
  var altRad = Math.asin(sinOfAlt); //in radians?
  var altDeg = altRad / rad; //in degrees!

  if (DBuggins) {
    //find rise and set times
    console.log(
      "dateDay: " +
      dateDay +
      " dateMonth: " +
      dateMonth +
      " dateYear: " +
      dateYear +
      " dateHour: " +
      dateHour +
      " thisTimeZone: " +
      thisTimeZone +
      " Lat: " +
      Lat +
      "  Lon: " +
      Lon
    );
    console.log(
      OLDfind_sun_and_twi_events_for_date(MJD, thisTimeZone, Lon, Lat)
    );
    console.log("MJD: " + MJD);
    console.log("otherDate: " + otherDate);
    console.log("sglat: " + sglat);
    console.log("cglat: " + cglat);
    console.log("sinOfAlt: " + sinOfAlt);
    console.log("altRad: " + altRad);
    console.log("SO - sun altitude at this hour: " + altDeg + "°");
  } //end DBuggins
  return altDeg;
} //end getSunAlt()

/////////////////////////////END SUN POSITION FUNCTIONS AND STUFF////////////////////////////////

function SelectItemByValue(element, value) {
  if (value !== undefined && value !== null) {
    var length = element.options.length;
    for (var i = 0; i < length; i++) {
      if (element.options[i].value === value) {
        element.selectedIndex = i;
        return;
      }
    } //end for i
  } //end if not null
} //end func SelectItemByValue

function createRange(node, chars, rangee) {
  if (!rangee) {
    rangee = document.createRange();
    rangee.selectNode(node);
    rangee.setStart(node, 0);
  }

  if (chars.count === 0) {
    rangee.setEnd(node, chars.count);
  } else if (node && chars.count > 0) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.length < chars.count) {
        chars.count -= node.textContent.length;
      } else {
        rangee.setEnd(node, chars.count);
        chars.count = 0;
      }
    } else {
      for (var lp = 0; lp < node.childNodes.length; lp++) {
        rangee = createRange(node.childNodes[lp], chars, rangee);

        if (chars.count === 0) {
          break;
        }
      }
    }
  }

  return rangee;
}

function setCurrentCursorPosition(element, chars) {
  if (chars >= 0) {
    var selection = window.getSelection();

    rangee = createRange(element.parentNode, {
      count: chars
    });

    if (rangee) {
      rangee.collapse(false);
      selection.removeAllRanges();
      selection.addRange(rangee);
    }
  }
}

function isChildOf(node, parentId) {
  while (node !== null) {
    if (node.id === parentId) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}

function getCurrentCursorPosition(parentId) {
  var selection = window.getSelection(),
    charCount = -1,
    node;

  if (selection.focusNode) {
    if (isChildOf(selection.focusNode, parentId)) {
      node = selection.focusNode;
      charCount = selection.focusOffset;

      while (node) {
        if (node.id === parentId) {
          break;
        }

        if (node.previousSibling) {
          node = node.previousSibling;
          charCount += node.textContent.length;
        } else {
          node = node.parentNode;
          if (node === null) {
            break;
          }
        }
      }
    }
  }

  return charCount;
}

startSetUp();