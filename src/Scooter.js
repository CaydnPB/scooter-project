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

  }

  dock(station) {

  }

  recharge() {

  }

  requestRepair() {

  }
}


module.exports = Scooter