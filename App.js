import express from "express"

import logger from "./middlewares/logger.js"
import compressor from "./middlewares/compressor.js"
import cacheController from "./middlewares/cache-controller.js"

import baseRouter from "./routes/base.routes.js"
import userRouter from "./routes/user.routes.js"
import statusRouter from "./routes/status.routes.js"

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