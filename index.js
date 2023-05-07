const contactService = require('./contacts.js');
const argv = require("yargs").argv;


const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contactService.listContacts();
            return console.table(allContacts);
        case "get":
            const oneContact = await contactService.getContactById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await contactService.addContact(name, email, phone);
            return console.log(newContact);
        case "remove":
            const contacts = await contactService.removeContact(id);
            return console.log(contacts);
        default: 
            console.warn("\x1B[31m Unknown action type!");
    }
};

invokeAction(argv);


// invokeAction({action: "list"});
// invokeAction({action: "get", id: "qdggE76Jtbfd9eWJHrssH"});
// invokeAction({action: "add, name: "Chaim Lewis", email: "dui.in@egetlacus.ca", phone: "(294) 840-6685"});
// invokeAction({action: "remove", id: "C9sjBfCo4UJCWjzBnOtxl"});
