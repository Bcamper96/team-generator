const Employee = require("../lib/employee");
const employee = new Employee("Brian", "007", "briancampero@gmail.com");

test('test if we can het the values for the employee object',()=>{
    expect(employee.name).toBe('Brian');
    expect(employee.id).toBe('007');
    expect(employee.email).toBe('briancampero@gmail.com');
});

test('if we can get the name from the getName() method ', ()=>{
    expect(employee.getName()).toBe('Brian');
});

test('if we can get the ID from the getID() method', ()=>{
    expect(employee.getId()).toBe('007');
});

test('if we can get an email from the getEmail() method', ()=>{
    expect(employee.getEmail()).toBe('briancampero@gmail.com');
});

test('if we can get a role from the getRole() method', ()=>{
    expect(employee.getRole()).toBe('Employee');
});
