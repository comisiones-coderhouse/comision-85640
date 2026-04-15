import { Router } from "express";
import BaseController from "../controllers/base.controller.js";

const router = Router()

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get the landing page
 *     description: Gets an HTML landing page for the 'mi-app' server
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           text/html:
 *             schema:
 *               type: object
 */
router.get("/", BaseController.getLanding)

export default router