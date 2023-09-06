const express = require("express");
require('dotenv').config()
const cors = require('cors')



class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 4002

        this.middlewares()
        this.routes()
    }

    middlewares() {
        // Directorio publico
        this.app.use(express.static('public'))

        // Evitas cors
        this.app.use(cors())

        // Recibir el body desde la req
        this.app.use(express.json())
    }

    routes(){
        this.app.use('/api/users', require('../routes/users.routes'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`ejecutando en http://localhost:${this.port}`)
        })
    }

}

module.exports = Server