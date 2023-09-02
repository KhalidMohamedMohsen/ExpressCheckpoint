const express = require('express');

const app = express();

app.listen(3000);

app.set('view engine', 'pug');

app.use(express.static('public'));  

app.get('/', (req, res) => {
    res.render('HomePage', { title: 'HomePage'});
});

app.get('/OurServices', (req, res) => {
    res.render('OurServices', { title: 'OurServices' });
});

app.get('/ContactUs', (req, res) => {
    res.render('ContactUs', { title: 'ContactUS' });
});
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});