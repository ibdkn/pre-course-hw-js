let passport = {
    name: "Petr",
    surname: "Petrov",
};

console.log(passport.name);

let clone = Object.assign({}, passport);

clone.name = 'Ivan';

console.log(clone.name);