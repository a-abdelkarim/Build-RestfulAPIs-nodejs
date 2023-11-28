import mongoose from 'mongoose';

import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
    let newContact = new Contact(req.body);

    try {
        let addedContact = await newContact.save();
        res.json(addedContact);
    } catch (err) {
        res.send(err);
    }
}

export const getContacts = async (req, res) => {
    try {
        let contacts = await Contact.find({});
        res.send(contacts);
    } catch (err) {
        res.send(err);
    }
}


export const getContact = async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.contactId);
        res.send(contact);
    } catch (err) {
        res.send(err);
    }
}