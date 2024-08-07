const express = require('express');
const exphbs = require('express-handlebars');

const routes = require('./routes');
const sequelize = require('./config/connections');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(_dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('This is PORT ${PORT} listening.  Blah, Blah, Blah.'))
});