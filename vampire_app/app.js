// 1. Require your node modules

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const vampireModel = require('./models/vampire');
const app = express()
// 2. Require your model (and possibly your extra data source);
const vampires = require('./populateVampires.js')
// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true })
// 4. Open your mongoose connection
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
vampireModel.collection.insertMany(vampires, (err, data) => {
  console.log("added provided vampire data")
  mongoose.connection.close();
});
// ### Add some new vampire data
let newVampires = [{
    name: 'Happy',
    dob: new Date(1994, 2, 8, 5, 3),
    hair_color: 'strawberry blonde',
    eye_color: 'ocean blue',
    loves: ['the thrill of the hunt', 'Janet Reno'],
    location: 'Newark, New Jersey',
    gender: 'm',
    victims: 12},
    {
    name: 'Duke',
    dob: new Date(1818, 5, 8, 3, 6),
    hair_color: 'doo doo brown',
    eye_color: 'hazel',
    loves: ['a good challenge', 'wholesome humor', 'Bobby McFerrin'],
    location: 'Jackson, Mississippi',
    gender: 'unknown',
    victims: 99},
    {
    name: 'Bridget',
    dob: new Date(2017, 4, 9, 1, 4),
    hair_color: 'hot pink',
    eye_color: 'white',
    loves: ['Hot Topic', 'Blink182 before Tom Delonge quit', 'cider'],
    location: 'Cincinatti, Ohio',
    gender: 'f',
    victims: 5280},
    {
    name: 'Gina The Destroyer',
    dob: new Date(1999, 9, 1, 4, 3),
    hair_color: 'unknown',
    eye_color: 'unknown',
    loves: ['privacy', 'a clean crime scene', 'listerine'],
    location: 'unknown',
    gender: 'f',
    victims: 99999}];
vampireModel.insertMany(newVampires, function(error, docs) {});
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
vampireModel.find({gender: 'f'})
vampireModel.find({victims: >500})
vampireModel.find({victims: <= 150})
vampireModel.find({victims: != 210234})
vampireModel.find({victims: >150 && <500})
/////////////////////////////////////////////////
// ### Select by exists or does not exist
vampireModel.find({title: {$exists: true}})
vampireModel.find({victims: {$exists: false}})
vampireModel.find({title: {$exists: true}}, && {victims: {$exists: false}})
vampireModel.find({victims: {$exists: true && >1000}})
/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////

app.listen(9000, () => {
	console.log('Server up and running')
})