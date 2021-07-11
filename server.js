const express = require(`express`);
const {animals} = require('./data/animals.json');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const PORT = process.env.PORT || 3001;

const app = express();

// stops gating behind server endpoint for supporting front end files
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());
// tells server to use the apiRoutes when user accesses /api
app.use('/api', apiRoutes);
// tells server to use the htmlRoutes when user accesses /
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
});
