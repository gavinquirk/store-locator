const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

// Load environment variables
dotenv.config({
  path: './config/config.env'
})

const app = express();

// Body Parser
app.use(express.json())

// Enable CORS
app.use(cors())

// Routes
app.get('/api/v1/stores', (req, res) => {
  res.send('Hello World')
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))

