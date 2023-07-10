import express from 'express';
import { createCroisiere,updateCroisiere,getCroisiere,getByID,deleteCroisiere} from '../controllers/Croisiere.js';

const router =express.Router();

// Creer un Croisiere
router.post("/", createCroisiere);

// Recuperer les Croisieres
router.get('/', getCroisiere);
router.get('/:id', getByID);

//Update un Croisiere
router.put('/:id',updateCroisiere);

//Supprimer un Croisiere
router.delete("/:id",deleteCroisiere)

export default router