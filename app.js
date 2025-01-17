/* eslint-disable no-console */
const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.static('dist'))
app.get('/health', (req, res) => {
  res.send('Ok')
})
app.listen(PORT, () => {
  console.log('server started on port 5000')
})
