const express = require('express');
const bodyParser = require('body-parser');
const eventsRouter = require('./router/eventsRouter');


const app = express();

app.use(cors());                    
app.use(bodyParser.json())
app.use('/api/events', eventsRouter)

app.listen(4000, () => {
  console.log('Application running on port 4000...')
})

module.exports = app