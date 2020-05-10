const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
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
