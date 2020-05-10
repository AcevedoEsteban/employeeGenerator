// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getId() {
    return this.id;
  }
  // set id(newID) {
  //   return (this._id = newID1);
  // }
  getName() {
    return this.name;
  }
  // set name(newName) {
  //   return (this._name = newName);
  // }

  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
