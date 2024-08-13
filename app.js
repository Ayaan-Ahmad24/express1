const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
const blogRoutes = require('./routes/blogs');

app.use(bodyParser.json());
app.use('/blogs', blogRoutes);

db.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
});
