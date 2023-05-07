const contactService = require('./contacts.js');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contactService.listContacts();
            return console.log(allContacts);
        case "getContactById":
            const oneContact = await contactService.getContactById(id);
            return console.log(oneContact);
        default: 
            console.log("Unknown action")
}

}