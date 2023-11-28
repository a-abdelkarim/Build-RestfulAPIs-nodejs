import { addNewContact, getContacts, getContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        .get(getContacts)
        .post(addNewContact)

    app.route('/contact/:contactId')
        .get(getContact)
        .put((req, res) => {
            res.send("PUT request succeed!");
        })

        .delete((req, res) => {
            res.send("DELETE request succeed!");
        })
}

export default routes;