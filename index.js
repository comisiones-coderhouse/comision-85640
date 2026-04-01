import App from "./App.js";

async function main() {
    try {
        const app = new App()
        app.init()
    } catch (error) {
        console.log("🚀 ~ index.js:2 ~ main ~ error:", error)
        console.log("Error en try/catch")
    }
}

main()

process.on("uncaughtException",(error,data)=>{
    console.log(error)
    console.log("uncaughtException")
})

process.on("unhandledRejection",(error,data)=>{
    console.log(error)
    console.log("unhandledRejection")
})