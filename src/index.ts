import express from 'express';
import { APIRouter } from './api-route';

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hola! Comunidad Toluca JS' })
})

app.use('/api/v1', APIRouter)

export const web = app
