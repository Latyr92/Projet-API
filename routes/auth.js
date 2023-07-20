import express from 'express';
import { connexion,inscrire,findAllUser} from '../controllers/auth.js';

const router =express.Router();

router.get("/",findAllUser)
// LOgin

router.post("/", connexion);
router.post("/new/", inscrire);

export default router
