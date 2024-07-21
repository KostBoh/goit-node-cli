// import { program } from "commander";
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse();

// const options = program.opts();

// // TODO: рефакторити
// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       // ...
//       break;

//     case "get":
//       // ... id
//       break;

//     case "add":
//       // ... name email phone
//       break;

//     case "remove":
//       // ... id
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(options);

// console.log("Hello Node");

import {
  listContacts,
  getContactById,
  addContact,
  updateById,
  removeContact,
} from "./contacts.js";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const list = await listContacts();
      return console.log(list);
    case "get":
      const oneContact = await getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await addContact(data);
      return console.log(newContact);
    case "updateById":
      const updateContact = await updateById(id, data);
      return console.log(updateContact);
    case "removeContact":
      const deleteContact = await removeContact(id);
      return console.log(deleteContact);

    default:
      console.log("Unknow action");
  }
};
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "add",
//   name: "Kostya Bohdan",
//   email: "1234@gmail.com",
//   phone: "+3805555555",
// });
// invokeAction({
//   action: "updateById",
//   id: "mdFYyiDs2sGRjBA0r0SAf",
//   phone: "+3809999999",
// });
invokeAction({
  action: "removeContact",
  id: "mdFYyiDs2sGRjBA0r0SAf",
});
