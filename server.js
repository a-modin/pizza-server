const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const ingredients = [
  {
    id: 1,
    name: 'Моцарелла',
    amount: 100
  },

  {
    id: 2,
    name: 'Пармезан',
    amount: 20
  },

  {
    id: 3,
    name: 'Помидоры',
    amount: 500
  },

  {
    id: 4,
    name: 'Базилик',
    amount: 10
  },

  {
    id: 5,
    name: 'Мука',
    amount: 200
  },

  {
    id: 6,
    name: 'Вода',
    amount: 100
  },

  {
    id: 7,
    name: 'Дрожжи',
    amount: 10
  },

  {
    id: 8,
    name: 'Оливковое масло',
    amount: 20
  },

  {
    id: 9,
    name: 'Соль',
    amount: 3
  },

  {
    id: 10,
    name: 'Сахар',
    amount: 5
  },

];

const login = 'remontista';
const pass = 'pizza';
const accessToken = 'secret-token';

const checkAccessToken = (req, res, next) => {
  let at = req.query.accessToken;
  
  if (!at || at !== accessToken) {
    res.status(401).send();
    return;

  } else {
    next();
  };

  next();
}

app.get("/api/data", checkAccessToken, (req, res) => {
  res.send(ingredients);
});


app.post("/api/auth", (req, res) => {
  if (req.body.login === login && req.body.pass === pass) {
    res.status(200).send(accessToken);

  } else {
    res.status(401).send();
  }
});
 
app.listen(3030);