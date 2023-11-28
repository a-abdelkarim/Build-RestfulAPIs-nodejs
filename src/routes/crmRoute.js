import { addNewContact, getContacts, getContact, updateContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        .get(getContacts)
        .post(addNewContact)

    app.route('/contact/:contactId')
        .get(getContact)
        .put(updateContact)

        .delete((req, res) => {
            res.send("DELETE request succeed!");
        })
}

export default routes;