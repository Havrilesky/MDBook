//DON'T FORGET
//     1. Switch the ws socket to amazon before deploying (not local host) LINE:617 of thebook.js

var express = require('express');
var path = require('path');

var ws = require('ws')
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
require('mongoose').set('debug', true);

//var favicon = require('serve-favicon');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var index = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//////////////////////MONGO SHIT//////////////////////////////////////////////////////////////////////////////////////////////////////
//mongoose.connect('mongodb://localhost/book');
//mongoose.connect('mongodb://user666:satan@ds133360.mlab.com:33360/book');
//2021 version of connect
//mongoose.connect('mongodb+srv://user666:satan@book.y72ue.mongodb.net/book?retryWrites=true&w=majority');


//new 2022 version of connect?????
const mongoOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,   //add it
  //useMongoClient: true,
  autoIndex: false, // Don't build indexes
  //reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  //reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
};
mongoose.connect('mongodb+srv://user666:satan@book.y72ue.mongodb.net/book?retryWrites=true&w=majority', mongoOptions)
.then(() => console.log('Vade retro...'))
.catch(err =>console.log(err));


var diarySchema = mongoose.Schema;

var writingSchema = diarySchema({
    WritingId: Number,
    Date: Date,
    Author: String,
    Location: String,
    Temperature: String,
    Weather: String,
    WritingContent: String,
}); //end mapItemSchema

var lastDateSchema = diarySchema({
    Date: Date
}); //end lastDateSchema


var writing = mongoose.model('writing', writingSchema);
var lastDate = mongoose.model('lastdate', lastDateSchema);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('mongo has connected');
}); //end open func


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////diary operations//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createWriting(writingData) {
    var newWriting = new writing(writingData); //writingData is JSON
    /*
  var newWriting = new writing({
    "WritingId": 7,
    "Author": "Kiedis",
    "Location": "Glendale",
    "Temperature": "Cold",
    "Weather": "Clear",
    "WritingContent": "this turdly was made from within app.js"
  });
*/
    console.log("made new writing data: "); // 
    console.dir(newWriting); // 

    //newWriting.markModified('Date');

    newWriting.save(function (err, newlyCreated) {
        if (err) {
            return console.error("Yo ERROR: " + err);
        } else {
            console.log("newlyCreated: "); // 
            console.dir(newlyCreated); // 
            return newlyCreated;
        }
    }) //end save
} //end createWriting


async function allWritings() {
    console.log("in allWritings()..."); // 
    var returnWritings = [];
    const cursor = db.collection('writings').find(); // Don't `await`, instead get a cursor

    // Use `next()` and `await` to exhaust the cursor
    for (let nextWriting = await cursor.next(); nextWriting != null; nextWriting = await cursor.next()) {
        console.log("got one");
        returnWritings.push(nextWriting);
    }
    console.log("gonna send allWritings: " + returnWritings);
    var newWSMessage = {
        "Command": "PUT",
        "Data": returnWritings
    };
    var JSONMess = JSON.stringify(newWSMessage);
    ws.send(JSONMess);
    resolve(returnWritings);
} //end allWritings




/*
db.book.insert({
    "WritingId": 7,
    "Author": "Aurvan",
    "Location": "Quito",
    "Temperature": "Sweltering",
    "Weather": "Clear",
    "WritingContent": "this YET AGIN was made from within app.js"
  });
*/

/*

saveDates() {
//////remember to save dates this way
	var Assignment = mongoose.model('Assignment', { dueDate: Date });
Assignment.findOne(function (err, doc) {
  doc.dueDate.setMonth(3);
  doc.markModified('dueDate');
  doc.save(callback); // works
})
}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////WEBSOCKET SERVER///////////////////////////////////////////////////////////////////////////////////
//{"Command":"NEW",
//"Data": hopefully looka lot like writingSchema}
//"NEW", "DELETE", "SAVE",
var clients = [];

var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 8090
    });

wss.on('connection', function (ws) {


    var index = clients.push(ws) - 1;
    console.log("setting client index: " + index);



    console.log("About to get last date and send to client..."); // want to show them the latest date so we have to send//////////
    lastDate.findOne({}, function (err, dateRec) {

        if (err) {
            console.error('GET LAST DATE ERROR!');
        } else {
            //SEND BACK TO CLIENT
            console.log('Now About to "DATE" back to client with:');
            console.dir(dateRec._doc);
            var newWSMessage = {
                "Command": "DATE",
                "Data": [dateRec._doc]
            };
            var outMessJson = JSON.stringify(newWSMessage);
            ws.send(outMessJson);
        }; //end else
    });

    ws.on('message', async function (message) { ///handle messages////////////////////////

        console.log('received: %s', message);
        var inMessJson = JSON.parse(message);
        var inMessCommand = inMessJson.Command;
        var inMessData = inMessJson.Data;
        console.log('inMessCommand: %s', inMessCommand);
        console.log('inMessData:');
        console.dir(inMessData);
        if (inMessJson.Command == "NEW") { ////////////////////////////////////Make NEW writing///////////////////////////////////////
            console.log('About to create with: %s', inMessJson.Data)
            //var newWriting = await createWriting(inMessJson.Data);
            var newWriting = new writing(inMessJson.Data);
            newWriting.save(function (err, newlyCreated) {
                if (err) {
                    return console.error("Yo ERROR: " + err);
                } else {
                    console.log('Now About to "PUT" with:');
                    console.dir(newlyCreated);
                    var newWSMessage = {
                        "Command": "PUT",
                        "Data": [newlyCreated]
                    };
                    var outMessJson = JSON.stringify(newWSMessage);
                    for (var i = 0; i < clients.length; i++) { //need to tell every client (except ME) about new
                        clients[i].send(outMessJson);
                    } //end for each client
                }
            }) //end save

            //End "NEW"
        } else if (inMessJson.Command == "ALL") { ////////////////////////////////////get ALL writings///////////////////////////////////////
            var returnWritings = [];
            const cursor = db.collection('writings').find(); // Don't `await`, instead get a cursor

            // Use `next()` and `await` to exhaust the cursor
            for (let nextWriting = await cursor.next(); nextWriting != null; nextWriting = await cursor.next()) {
                console.log("got one");
                returnWritings.push(nextWriting);
            }
            console.log("gonna send allWritings: " + returnWritings);
            var newWSMessage = {
                "Command": "PUT",
                "Data": returnWritings
            };
            var outMessJson = JSON.stringify(newWSMessage);
            ws.send(outMessJson);
            //End "ALL"
        } else if (inMessJson.Command == "GET") { ////////////////////////////////////GET writings by date///////////////////////////////////////
            console.log("gonna GET:");
            console.dir(inMessJson.Data);
            var startDate = new Date(inMessJson.Data.Date);
            //need to adjust the hours to 000
            startDate.setUTCHours(0);
            var endDate = new Date(startDate.getTime() + 86399000); // + almost 1 day in ms
            var returnWritings = [];
            /*const cursor = db.collection('writings').find({
Date:{
'$gte':new Date("2025-04-01T00:00:00Z"), '$lte':new Date("2025-04-01T23:59:00Z")}});*/
            const cursor = db.collection('writings').find({

                Date: {

                    "$gte": new Date(startDate.toISOString()),
                    "$lte": new Date(endDate.toISOString())
                }
            });
            // Use `next()` and `await` to exhaust the cursor
            for (let nextWriting = await cursor.next(); nextWriting != null; nextWriting = await cursor.next()) {
                console.log("got one");
                returnWritings.push(nextWriting);
            }
            console.log("gonna send foundWritings: " + returnWritings);
            var newWSMessage = {
                "Command": "PUT",
                "Data": returnWritings
            };
            var outMessJson = JSON.stringify(newWSMessage);
            ws.send(outMessJson);
            //End "GET"
        } else if (inMessJson.Command == "UPDATE") { ////////////////////////////////////UPDATE an writing///////////////////////////////////////
            console.log("gonna UPDATE %s", inMessJson.Data);
            var returnWritings = [];

            //FIND 2
            writing.findOne({

                _id: ObjectId(inMessData.targetId)
            }, function (err, recordToChange) {
                recordToChange[inMessData.targetField] = inMessData.fieldValue; //apply the change to the found record

                recordToChange.save(function (err) {
                    if (err) {
                        console.error('ERROR!');
                    } else {
                        //SEND BACK TO CLIENT
                        console.log('Now About to "UPDATE" back to client with:');
                        console.dir(recordToChange);
                        var toSort = true;
                        if (inMessData.targetField == "WritingContent") {
                            toSort = false; //supress sort of divs in client during text entry!
                        } else {
                            toSort = true; //go ahead and allow sort of divs in client
                        }
                        var newWSMessage = {
                            "Command": "UPDATE",
                            "Sort": toSort,
                            "Data": [recordToChange]
                        };
                        var outMessJson = JSON.stringify(newWSMessage);
                        console.log('outMessJson:' + outMessJson);
                        for (var i = 0; i < clients.length; i++) { //need to tell every client (except ME) about new
                            console.log("i = " + i + "and my index = " + index + "...");
                            if (!(i == index)) { //skip myself
                                console.log("so message client #" + i);
                                clients[i].send(outMessJson);
                            } //end if not me
                        } //end for each client
                    } //end else no err
                });
            });
            //end else UPDATE
        } else if (inMessJson.Command == "LASTDATE") { ////////////////////////////////////LASTDATE coming in for database///////////////////////////////////////
            console.log("got LASTDATE %s", inMessJson.Data);
            lastDate.findOne({}, function (err, dateRec) {
                console.log('Did findOne for lastDate and got:');
                console.dir(dateRec._doc);
                //check if this date is later than the current saved date
                var thisDate = new Date(inMessJson.Data);
                var savedDate = new Date(dateRec._doc.Date);
                console.log("thisDate: " + thisDate.toUTCString() + " and savedDate: " + savedDate.toUTCString());

                if (thisDate.getTime() > savedDate.getTime()) {
                    console.log("about to write a new lastDate: %s", thisDate.toUTCString());
                    dateRec.Date = thisDate; //apply the change to the found record
                    dateRec.save(function (err) {
                        if (err) {
                            console.error('ERROR saving Last Date!');
                        }; //end err
                    }); //end save
                };
            }); //end findOne
        } else if (inMessJson.Command == "PING") { ////////////////////////////////////LASTDATE coming in for database///////////////////////////////////////
            console.log("got PING");
            var newWSMessage = {
                "Command": "PONG",
                "Data": null
            };
            var outMessJson = JSON.stringify(newWSMessage);
            console.log('outMessJson:' + outMessJson);
            //just send the PONG to the client who PINGed
            clients[index].send(outMessJson);
        };//END PING

        ws.on('close', function (ws) {
            console.log((new Date()) + " Client (index:" + index + "): " + ws.remoteAddress + " disconnected.");
            // remove user from the list of connected clients
            clients.splice(index, 1);
        }); //end close connection


        //setInterval(
        //  () => ws.send(`${new Date()}`),
        //  1000
        //));
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////


/*
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/ws.html');
})
*/

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
//app.use('/users', users);

app.use(express.static(path.join(__dirname, '/public')));
//app.use(express.static(path.join(__dirname, '/images')));
//app.use('/', index);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found Yo');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    // render the error page
    console.error("ERROR:" + err.message + " status: " + err.status);
    //res.render('error');
});

module.exports = app;

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});