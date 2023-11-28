import express from 'express';

import routes from './src/routes/crmRoute'

const app = express();
const PORT = 3000;

routes(app);

app.get('/', (req, res) => {
    res.send(`node and express are running on ${PORT}`);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});