const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this._school = school;
  }
  getSchool() {
    return this._school;
  }
  getRole() {
    return "Intern";
  }

  // set school(newSchool) {
  //   this._school = newSchool;
  // }
}
// const coffeBoy = new Intern("Boofa", 12, "afdsf", "asu");
// console.log(coffeBoy);
module.exports = Intern;
