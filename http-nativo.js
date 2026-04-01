const http = require("http")

const server = http.createServer((req, res) => {
    res.end("Hola mundo")
})

server.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000")
})