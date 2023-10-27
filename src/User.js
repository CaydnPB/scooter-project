class User {
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password) {
    if (password === this.password) {
      this.loggedIn = true;
      console.log("Login success")
    } else {
      this.loggedIn = false;
      throw new Error("Login failure")
    }
  }

  logout() {
    this.loggedIn = false;
    console.log("Logout Success")
  }
}

module.exports = User