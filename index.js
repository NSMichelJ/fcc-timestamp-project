const express = require('express');
const cors = require('cors')

const app = express();

// CORS
app.use(cors({ optionsSuccessStatus: 200 }));

// Static content
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/api/:date?', (req, res) => {

  const { date: dateString } = req.params
  let response = {}

  const date = !dateString ?
    new Date() :
    new Date(Number(dateString) || dateString)

  if (date.toString() !== 'Invalid Date') {
    response = {
      unix: date.getTime(),
      utc: date.toUTCString()
    }
  } else {
    response = {
      error: 'Invalid Date'
    }
  }

  res.status(200).json(response)
})

// listen for requests
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});