const express = require('express');
const app = express();
const port = 3000;
const admin = require('firebase-admin');

// var serviceAccount = require("the .json file path");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "your database url"
// });

var serviceAccount = require("/Users/vohoangtam/Downloads/smarthomedemo-8fab6-firebase-adminsdk-pohky-759acdf59e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://smarthomedemo-8fab6-default-rtdb.asia-southeast1.firebasedatabase.app"
});


// admin.initializeApp({
//     credential: admin.credential.applicationDefault(),
//     databaseURL: "https://smarthomedemo-8fab6-default-rtdb.asia-southeast1.firebasedatabase.app"
//   });


app.use(express.json());
app.use(express.static('public'));


const database = admin.database();
const usersRef = database.ref('/Door');
const LightRef = database.ref('/Light');
app.get('/', (req, res) => {
    res.send('index');
});

app.post('/DoorOpen', (req, res) => {
    const Status ="Status" ;
    usersRef.child(Status).set("true");
});

app.post('/DoorClose', (req, res) => {
    const Status ="Status" ;
    usersRef.child(Status).set("false");
});

app.put('/DoorOff', (req, res) => {
    usersRef.update({ Status: "OFF"});
});
app.put('/DoorOn', (req, res) => {
    usersRef.update({ Status: "On"});
});
// app.put('/DoorOff', (req, res) => {
//     usersRef.child('/Door').update({ Status: "OFF"});
// });
// app.put('/DoorOn', (req, res) => {
//     usersRef.child('/Door').update({ Status: "On"});
// });
app.put('/LightOn', (req, res) => {
    LightRef.update({ Status: "OFF"});
});
app.put('/LightOff', (req, res) => {
    LightRef.update({ Status: "On"});

});

// usersRef.on('child_added', snapshot => {
//     console.log('New data has been added to the database !');
// });

// usersRef.on('child_changed', snapshot => {
//     console.log('Data has been changed !');
// });

// usersRef.on('child_removed', snapshot => {
//     console.log('Data has been removed !');
// });

// usersRef.on('value', snapshot => {
//     console.log('An event occured on the database !');
// });

// usersRef.on('child_changed', snapshot => {
//     console.log(snapshot.val());
// });

// usersRef.orderByKey().limitToLast(2).on('value', snapshot => {
//     console.log(snapshot.val());
// });

// usersRef.orderByChild('last_name').startAt('J').on('value', snapshot => {
//     console.log(snapshot.val());
// });

// usersRef.orderByValue().limitToLast(2).on('value', snapshot => {
//     console.log(snapshot.val());
// });

// app.listen(port, () => {
//     //console.log(`App is listening to port ${port}`);
// });