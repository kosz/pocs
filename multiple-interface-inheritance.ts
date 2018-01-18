interface Person {
  fname: string;
  lname: string;
  postalCode: string; // if this were not the same as Address, 
  //the multiple inheritance would fail
}

interface Address {
  line1: string;
  postalCode: string;
}

const person: Person = {
  fname: 'asdf',
  lname: 'fdsa',
  postalCode: '123'
}

const address: Address = {
  line1: 'asdfasd',
  postalCode: '1m1 213',
};

interface FullInfo extends Address, Person { }

const combined: FullInfo = {
  ...person,
  ...address
};

console.log(combined);
