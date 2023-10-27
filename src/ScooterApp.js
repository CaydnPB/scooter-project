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
    // Get user from username
    if (userRegistered) {
      throw new Error("Username taken");
    } else if (user.age < 18) {
      throw new Error("Below 18");
    } else {
      newUser = new User(username, password, age)
      this.registeredUsers.push({ [username]: newUser });
      console.log("Account created for " + username);
    }
  }

  loginUser(username, password) {
    // Get user from username
    user.login(password);
  }

  logoutUser(username) {
    // Get user from username
    user.logout();
  }

  createScooter(station) { // Missing from UML Diagram
    if (!this.stations[station]) {
      throw new Error("Invalid station")
    } else {
      let newScooter = new Scooter(station);
      console.log("Scooter " + newScooter.serial + " created")
    }
  }

  dockScooter(scooter, station) {
    scooter.dock(station);
    this.stations[station].push(scooter);
  }

  rentScooter(scooter, user) {
    scooter.rent(user);
  }

  print() {
    console.log(this.stations);
    console.log(this.registerUsers)
  }
}

const user1 = new User("Caydn", "password", 18)
const scooter1 = new Scooter("Cambridge");
const scooterApp1 = new ScooterApp("Cambridge");

module.exports = ScooterApp