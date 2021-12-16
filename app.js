require('dotenv').config()
// async




const express = require('express')
const app = express();


const connnectDB = require('./db/connect')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// midddleware 
app.use(express.json())

// rootes

app.get('/', (req,res) => {
    res.send('<h1>Store api</h1><a href="/api/v1/products">Product route</a>')
})

// product root

app.use(notFoundMiddleware)
app.use(errorMiddleware)


const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connnectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening port ${port}`))
    } catch (error) {
        console.log(error)

    }
}

start()










