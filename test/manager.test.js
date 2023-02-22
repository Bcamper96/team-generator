const Manager = require("../lib/manager");
const manager = new Manager("Brian", "007", "briancampero@gmail.com", "222");

test('test if we can het the values for the manager object',()=>{
    expect(manager.name).toBe('Brian');
    expect(manager.id).toBe('007');
    expect(manager.email).toBe('briancampero@gmail.com');
    expect(manager.officeNumber).toBe('222');
});

test('if we can get the name from the getName() method ', ()=>{
    expect(manager.getName()).toBe('Brian');
});

test('if we can get the ID from the getID() method', ()=>{
    expect(manager.getId()).toBe('007');
});

test('if we can get an email from the getEmail() method', ()=>{
    expect(manager.getEmail()).toBe('briancampero@gmail.com');
});

test('if we can get an email from the getofficeNumber() method', ()=>{
    expect(manager.getOfficeNumber()).toBe('222');
});

test('if we can get a role from the getRole() method', ()=>{
    expect(manager.getRole()).toBe('Manager');
});