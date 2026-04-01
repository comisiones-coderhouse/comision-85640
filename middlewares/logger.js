import pino from "pino-http"

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
        ]
    }
})

export default logger