const qs = require('qs');
const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
const Email = require('email-templates');
const morgan = require('morgan');
const Bunyan = require('bunyan');
const rfs = require('rotating-file-stream');

// create a rotating write stream
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log'),
});

const logger = Bunyan.createLogger({
  name: 'paid-to-scale',
  streams: [
    {
      level: 'debug',
      path: 'logs.json', // log ERROR and above to a file
    },
  ],
});

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD
  },
});
844952

const email = new Email({
  send: true,
  transport,
});

const app = express();

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

app.use(helmet());
app.use(compression());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/email', (req, res) => {
  logger.warn('Processing');
  
  return email
    .send({
      template: 'mars',
      message: {
        to: 'brandon@paidtoscale.com',
        from: 'Paid to Scale <brandon@paidtoscale.com>',
      },
      locals: {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        email: req.query.email,
        phone: req.query.phone,
        comment: req.query.comment,
      },
    })
    .then(() => {
      logger.warn('Successfully sent email');
      res.send('ok');
    })
    .catch((err) => {
      logger.error('Failed to send email', err);
      res.send('ok');
    });
});

app.listen(process.env.PORT || 3030, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT || 3030}`);
});
