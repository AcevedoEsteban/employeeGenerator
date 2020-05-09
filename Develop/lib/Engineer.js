// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, GitHub) {
    super(name, id, email);
    this._GitHub = GitHub;
  }
  getGitHubId() {
    return this._GitHub;
  }

  // set gitHubId(newGitHub) {
  //   this._GitHub = newGitHub;
  // }
  getRole() {
    return "Engineer";
  }
}

// let Steven = new Engineer("steven", 9, "astevenaa@gmail.com", "cyborgfirefly");

module.exports = Engineer;
