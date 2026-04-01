import express from "express"
import pino from "pino-http"

import baseRouter from "./routes/base.routes.js"
import userRouter from "./routes/user.routes.js"
import statusRouter from "./routes/status.routes.js"
import compression from "compression"


const logger = pino({
    level: "trace",
    customLevels: {
        request: 35
    },
    redact: ["req.headers", "res.headers"],
    transport: {
        targets: [
            { target: "pino-pretty" },
            { target: "pino/file", options: { destination: "data.log" } },
            /* {
                target: "pino-mongodb", options: {
                    uri: 'mongodb://127.0.0.1:27017/',
                    database: 'logs',
                    collection: 'log-collection',
                },
            } */
        ]
    }
})


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
        //this.#app.set("etag", false)
        this.#app.use(logger)
        this.#app.use(compression())
        this.#app.use((req, res, next) => {
            res.set("Cache-Control", "public, max-age=3600")
            next()
        })
    }

    loadRoutes() {
        this.#app.use("/", baseRouter)
        this.#app.use("/users", userRouter)
        this.#app.use("/status", statusRouter)
    }


    init(port = this.#port) {
        this.#app.listen(port, () => {
            console.log(`Web server up and running on ${port}`)
        })
    }

    get app() {
        return this.#app
    }

}

export default App