const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = {
      London: [],
      Cambridge: [],
      Liverpool: [],
    };
    this.registeredUsers = {}; // Different name to UML Diagram
  }

  registerUser(username, password, age) {

  }

  loginUser(username, password) {

  }

  logoutUser(username) {

  }

  createScooter(station) { // Missing from UML Diagram

  }

  dockScooter(scooter, station) {

  }
  rentScooter(scooter, user) {

  }

  print() {

  }
}

module.exports = ScooterApp