import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './src/routes/crmRoute'

const app = express();
const PORT = 3000;

// mongodb connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/crm', {
    useNewUrlParser: true
})

// bodyParser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
    res.send(`node and express are running on ${PORT}`);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});