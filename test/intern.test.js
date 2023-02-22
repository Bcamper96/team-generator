const Intern = require("../lib/intern");
const intern = new Intern("Brian", "007", "briancampero@gmail.com", "Miami");

test('test if we can het the values for the intern object',()=>{
    expect(intern.name).toBe('Brian');
    expect(intern.id).toBe('007');
    expect(intern.email).toBe('briancampero@gmail.com');
    expect(intern.school).toBe('Miami');
});

test('if we can get the name from the getName() method ', ()=>{
    expect(intern.getName()).toBe('Brian');
});

test('if we can get the ID from the getID() method', ()=>{
    expect(intern.getId()).toBe('007');
});

test('if we can get an email from the getEmail() method', ()=>{
    expect(intern.getEmail()).toBe('briancampero@gmail.com');
});

test('if we can get an email from the getofficeNumber() method', ()=>{
    expect(intern.getSchool()).toBe('Miami');
});

test('if we can get a role from the getRole() method', ()=>{
    expect(intern.getRole()).toBe('Intern');
});