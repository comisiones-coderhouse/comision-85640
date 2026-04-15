import express from "express"
import mongoose from "mongoose"
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

import logger from "./middlewares/logger.js"
import compressor from "./middlewares/compressor.js"
import cacheController from "./middlewares/cache-controller.js"

import baseRouter from "./routes/base.routes.js"
import userRouter from "./routes/user.routes.js"
import statusRouter from "./routes/status.routes.js"


const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'My API',
        version: '1.0.0',
        description: 'API documentation for My App',
    },
    servers: [
        {
            url: 'http://localhost:4000',
            description: 'Development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/**/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);


class App {

    #app
    #port

    constructor(port) {
        this.#app = express()
        this.#port = port || process.env.PORT || 3000
        this.loadMiddleware()
        this.loadRoutes()

        this.#app.on("error", (e) => {
            console.log(e)
            console.log("hubo un error")
        })
    }

    loadMiddleware() {
        this.#app.use(logger)
        this.#app.use(compressor)
        this.#app.use(cacheController)
    }

    loadRoutes() {
        this.#app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        this.#app.use("/", baseRouter)
        this.#app.use("/users", userRouter)
        this.#app.use("/status", statusRouter)
    }


    init(port = this.#port) {

        mongoose.connect("mongodb://127.0.0.1:27017")
        //mongoose.connect("mongodb://mongo:27017")
            .then(() => {
                this.#app.listen(port, () => {
                    console.log(`Web server up and running on ${port}`)
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    get app() {
        return this.#app
    }

}

export default App