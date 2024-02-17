import React, { useEffect, useState } from "react";
import AddContacts from "./components/AddContacts";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import { v4 as uuidv4 } from 'uuid';

function App() {
 
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
      console.log("ADD",contact);
      setContacts([...contacts, {id:uuidv4(),  ...contact}]);
  } 

  const removeContacthandler = (id) => {
    const newContactList = contacts.filter((contact)=>{
        return contact.id !== id;
    })

    setContacts(newContactList);
  }


  useEffect(()=>{
    const retriveContacts =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log("retriveContacts->",retriveContacts);
   if (retriveContacts) setContacts(retriveContacts);
   },[]);


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);



  return (
    <div className="ui container">
      <Header />
      <AddContacts addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContacthandler}/>
    </div>
  );
}

export default App;
