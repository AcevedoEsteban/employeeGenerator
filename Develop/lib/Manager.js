// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this._officeNum = officeNum;
  }
  getOfficeNum() {
    return this._officeNum;
  }

  getRole() {
    return "Manager";
  }

  // set officeNum(newOfficeNum) {
  //   this._officeNum = newOfficeNum;
  // }
}

module.exports = Manager;
