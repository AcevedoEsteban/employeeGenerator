// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email) {
    this._name = name;
    this._id = id;
    this._email = email;
  }
  getId() {
    return this._id;
  }
  // set id(newID) {
  //   return (this._id = newID1);
  // }
  getName() {
    return this._name.toUpperCase();
  }
  // set name(newName) {
  //   return (this._name = newName);
  // }

  getEmail() {
    return this._email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
