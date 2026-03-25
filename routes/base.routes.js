import { Router } from "express";
import BaseController from "../controllers/base.controller.js";

const router = Router()

router.get("/", BaseController.getLanding)

export default router