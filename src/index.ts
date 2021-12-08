import { send } from "./mailer";

function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(5, 7));

var a: bigint = BigInt(10);
console.log(typeof a);

interface Contact {
  name: string;
  phone: string;
  email?: string;
}

const contacts: Contact[] = [];
const newContact: Contact = {
  name: "Smith",
  phone: "123",
  email: "",
};
const newContact2: Contact = {
  name: "222",
  phone: "",
};

contacts.push(newContact);

if (newContact.email) {
  send(newContact.email, "1", "2");
}
