const Employee = require("./Employee");

class Engineer extends Employee {

  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getName () {
      return this.name
  }
  
  getRole() {
    return "Engineer";
  }

  getGitHubUserName() {
    return this.github;
  }

  getEmail() {
    return this.email
  }

  getId () {
    return this.id
  }
}

module.exports = Engineer;
