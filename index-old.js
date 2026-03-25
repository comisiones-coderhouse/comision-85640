//import express from "express"
//import os from 'os'
//import pino from "pino"
/* import pino from "pino-http"
 */

const params = process.argv.slice(2)

let paramsFormateados = {}


params.forEach(param => {
    //param === '--port=5000' | '--port=5000'
    const paramCortado = param.split("=") //[ '--port', '5000' ]
    const [nombre, valor] = paramCortado //'5000'
    const nombreFormateado = nombre.replace("--", "") //'port"

    paramsFormateados[nombreFormateado] = valor
})


//Standar Input
//document.addEventListener("click",()=>{})
//process.stdin.addListener()
process.stdin.on("data", (input) => {
    const valorDeEntrada = input.toString()
    console.log("🚀 ~ index.js:12 ~ input:", valorDeEntrada)
})

//Standar Output
//process.stdout.write("Hola")
//process.stdout.end("mundo")
//console.log("Hola mundo")


//init
//const app = express()
//Logging
/* const logger = pino({
    level: "trace",
    customLevels: {
        request: 35
    },
    redact : ["req.headers","res.headers"],
    base : {
        file : "index.js"
    }
    transport: {
        targets: [
            { target: "pino-pretty" },
            { target: "pino/file", options: { destination: "data.log" } },
            {
                target: "pino-mongodb", options: {
                    uri: 'mongodb://127.0.0.1:27017/',
                    database: 'logs',
                    collection: 'log-collection',
                }
            }
        ]
    }
}) */

//const childLogger = logger.child({ file: "index.js" })

/* 
logger.trace("trace") 10
logger.debug("debug") 20
logger.info("info") 30
logger.warn("warn") 40
logger.error("error") 50
logger.fatal("fatal") 60 
*/
//logger.trace({ id: 2, name: "Horacio", isDev: true })
//logger.request({ id: 2, name: "Horacio", isDev: true })


//variables de entorno
//console.log(process.env.nombre)
const PORT = paramsFormateados.port || process.env.PORT || 3000


//middleware
app.use(logger)


//routes
/* app.get("/", (req, res) => {

    const user = { name: "Horacio" }

    logger.request({ method: req.method, path: req.url })
    childLogger.request({ payload: { name: user.name, method: req.method, path: req.url } })

    res.send("Hola mundo")
}) */

/* app.get("/status", (req, res) => {

    logger.request({ method: req.method, path: req.url })
    childLogger.request({ method: req.method, path: req.url })

    const uptime = process.uptime()
    const memory = process.memoryUsage()
    const pid = process.pid

    const totalmem = os.totalmem()
    const freemem = os.freemem()

    const arch = os.arch()
    const platform = os.platform()

    const stats = { uptime, memory, pid, totalmem, freemem, arch, platform }

    res.send(stats)
})
 */

//start
/* app.listen(PORT, () => {
    console.log(`Web server up and running on ${PORT}`)
}) */