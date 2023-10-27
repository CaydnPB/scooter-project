class Scooter{
  static nextSerial = 1;
  constructor(station) {
    this.station = station;
    this.user = null; // Different data type to UML Diagram
    this.serial = Scooter.nextSerial;
    Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
    // Docked attribute from UML Diagram not needed
  }

  rent(user) {
    if (this.isBroken == false && this.charge > 20) {
      this.user = user;
      console.log("Scooter rented by " + user.username);
    } else if (this.charge <= 20) {
      throw new Error("Scooter cannot be rented due to low charge");
    } else {
      throw new Error("Scooter cannot be rented due to being broken");
    }
  }

  dock(station) {
    if (station !== "London" && station !== "Cambridge" && station !== "Liverpool") {
      throw new Error("Invalid station")
    } else {
      this.station = station;
      this.user = null;
      console.log("Scooter docked at " + station)
    }
  }

  recharge() {

  }

  requestRepair() {

  }
}


module.exports = Scooter