const Employee = require("./Employee");

class Manager extends Employee {

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getName() {
    return this.name
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getEmail() {
    return this.email
  }

  getId () {
    return this.id
  }
}

module.exports = Manager;
