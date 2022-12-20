require('dotenv').config()
const Parse = require('parse/node');

Parse.initialize(process.env.APP_ID, process.env.JS_KEY); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'
const User = Parse.Object.extend("User");
const event = new User();
const eventQuery = new Parse.Query(User);
// create();
async function create() {
  const user = {
    username: 'deeskii',
    email: 'dee@me.com',
    password: 'pword3'
  };
  console.info('Creating an object', user);
  await event.save(user)
  .then(obj => obj.toJSON())
  .then(event => {
    console.log('Object saved:\n', event);
    read(event.objectId);
  })
  .catch(console.error);
}

function read(id) {

  // Retrieving object
  console.info('Retrieving object with id', id);
  eventQuery.get(id)
  .then(obj => obj.toJSON())
  .then(event => {
    console.info('Object retrieved', event);
    // update(event.objectId);
  })
  .catch(console.error);
}

read('0jpnOhzAT4')

// function destroy(id) {
//   console.info('Destroying object id', id);
//   eventQuery.first(id)
//   .then(eventToDelete => {
//     if(eventToDelete !== undefined) {
//       console.log('Event to Delete', eventToDelete.id);
//       eventToDelete.destroy()
//       .then(eventDeleted => {
//         console.log('Deleted Event', eventDeleted.id);
//       })
//       .catch(console.error)
//     }
//   });
// }