import App from "./App.js";
import logger from "./middlewares/logger.js";

async function main() {
    try {

        const app = new App()
        app.init()

    } catch (error) {
        logger.logger.fatal("test")
    }
}

main()