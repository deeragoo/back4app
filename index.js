require('dotenv').config()
var Parse = require('parse/node');

Parse.initialize(process.env.APP_ID, process.env.JS_KEY); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'


async function saveNewPlayer() {
  //Create your Parse Object
  const user = new Parse.Object('User');
  //Define its attributes
  user.set('playerName', 'A. Wed');
  user.set('yearOfBirth', 1997);
  user.set('emailContact', 'a.wed@email.io');
  user.set('attributes', ['fast', 'good conditioning']);
  try {
    //Save the Object
    const result = await user.save();
    alert('New object created with objectId: ' + result.id);
  } catch (error) {
    alert('Failed to create new object: ' + error.message);
  }
}