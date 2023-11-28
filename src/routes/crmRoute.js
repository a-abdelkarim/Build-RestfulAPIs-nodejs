const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            console.log(req.originalUrl);
            console.log(req.method);
            next();
        }, (req, res, next)=>{
            res.send("GET request succeed!");
        })

        .post((req, res) => {
            res.send("POST request succeed!");
        })

    app.route('/contact/:contactId')
        .put((req, res) => {
            res.send("PUT request succeed!");
        })

        .delete((req, res) => {
            res.send("DELETE request succeed!");
        })
}

export default routes;