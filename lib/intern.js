const Employee = require("./Employee");

class Intern extends Employee {

  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getName () {
      return this.name
  }
  
  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }

  getEmail() {
    return this.email
  }

  getId () {
    return this.id
  }
}

module.exports = Intern;
