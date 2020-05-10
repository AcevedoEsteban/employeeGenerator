// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, GitHubUser) {
    super(name, id, email);
    this.GitHubUser = GitHubUser;
  }
  getGithub() {
    return this.GitHubUser;
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
