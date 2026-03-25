import os from 'os'
import prettyBytes from 'pretty-bytes';

class StatusController {

    static getStatus(_req, res) {
        const uptime = process.uptime()
        const memory = process.memoryUsage()
        const formatedMemory = Object.keys(memory).reduce((prev, curr) => {
            console.log(prev)
            console.log(curr)
            prev[curr] = prettyBytes(memory[curr])
            return prev
        }, {})

        const pid = process.pid

        const totalmem = os.totalmem()
        const formatedTotalmem = prettyBytes(totalmem)

        const freemem = os.freemem()
        const formatedFreemem = prettyBytes(freemem)

        const arch = os.arch()
        const platform = os.platform()

        const stats = { uptime, memory, formatedMemory, pid, totalmem , formatedTotalmem, freemem , formatedFreemem, arch, platform }

        res.send(stats)
    }
}

export default StatusController