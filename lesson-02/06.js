let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
console.log(passportWithAddress.address.city);

const cloneOfPassportWithAddress = structuredClone(passportWithAddress);
cloneOfPassportWithAddress.address.city = 'Bobryisk';

console.log(cloneOfPassportWithAddress.address.city);