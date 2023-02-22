const Engineer = require("../lib/engineer");
const engineer = new Engineer("Brian", "007", "briancampero@gmail.com");

test('test if we can het the values for the engineer object',()=>{
    expect(engineer.name).toBe('Brian');
    expect(engineer.id).toBe('007');
    expect(engineer.email).toBe('Briancampero@gmail.com');
    expect(engineer.github).toBe('Briancampero');
});

test('if we can get the name from the getName() method ', ()=>{
    expect(engineer.getName()).toBe('Brian');
});

test('if we can get the ID from the getID() method', ()=>{
    expect(engineer.getId()).toBe('007');
});

test('if we can get an email from the getEmail() method', ()=>{
    expect(engineer.getEmail()).toBe('Briancampero@gmail.com');
});

test('if we can get an email from the getGithub() method', ()=>{
    expect(engineer.getGithub()).toBe('Briancampero');
});

test('if we can get a role from the getRole() method', ()=>{
    expect(engineer.getRole()).toBe('Engineer');
});