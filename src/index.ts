import { send } from "./mailer";

function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(5, 7));

var a: bigint = BigInt(10);
console.log(typeof a);

interface Pet {
  name: string;
}

interface Contact {
  name: string;
  phone: string;
  email?: string;
  pet?: Pet;
  address?: Address[];
}

interface Address {
  city: string;
}

const contacts: Contact[] = [];
const newContact: Contact = {
  name: "Smith",
  phone: "123",
  email: "",
  pet: {
    name: "A",
  },
};
const newContact2: Contact = {
  name: "222",
  phone: "",
};

contacts.push(newContact);

if (newContact.email) {
  send(newContact.email, "1", "2");
}

function getPetName(contact: Contact): string {
  return contact.pet?.name || "";
}

function getFirstAddress(contact: Contact) {
  return contact.address?.[0];
}

console.log(getPetName(newContact));
console.log(getPetName(newContact2));

console.log(getFirstAddress(newContact)?.city);

//extend interface
interface Button {
  label: string;
  onclick: () => void;
}

const button: Button = {
  label: "submit",
  onclick: () => {
    console.log("click submit");
  },
};

interface IconButon extends Button {
  icon: string;
}

const AddButton: IconButon = {
  label: "submit",
  onclick: () => {
    console.log("click submit");
  },
  icon: "add-icon",
};

class MyContact implements Contact {
  name: string;
  phone: string;

  constructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
  }
}

const mycontact = new MyContact("Smith", "999");
console.log(mycontact.name);

interface ContactAdapter {
  getData: () => Contact[];
}

class MyContactAdapter implements ContactAdapter {
  getData() {
    const contacts: Contact[] = [
      { name: "Smith", phone: "123" },
      { name: "John", phone: "456" },
    ];

    return contacts;
  }
}

class ContactApp {
  adapter: ContactAdapter;
  constructor(adapter: ContactAdapter) {
    this.adapter = adapter;
  }
  render() {
    console.table(this.adapter.getData());
  }
}

const adapter = new MyContactAdapter();
const app = new ContactApp(adapter);
app.render();
