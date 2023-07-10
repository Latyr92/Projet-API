import express from 'express';
import { createVol,updateVol,getVol,getByID,deleteVol} from '../controllers/vol.js';

const router =express.Router();
// Creer un hotel
router.post("/", createVol);

// Recuperer les hotelsd
router.get('/', getVol);
router.get('/:id', getByID);

//Update un hotel
router.put('/:id',updateVol);

//Supprimer un hotel
router.delete("/:id",deleteVol)


export default router