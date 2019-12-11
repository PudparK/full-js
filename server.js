import config from './config';
import apiRouter from './api';
import path from 'path';

import express from 'express';
const server = express();

// Sass //////////
import sassMiddleware from 'node-sass-middleware';

server.use(sassMiddleware({
  src: path.join(__dirname, './src/sass'),
  dest: path.join(__dirname, '../../public'),
}));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: 'Hello Express and <em>EJS</em>!'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express is listening on port ', config.port);
});