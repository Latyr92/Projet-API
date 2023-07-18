import express from 'express';
import { createHotel,updateHotel,getHotel, getHotel_modifie,getHotel_supprime,getByID,deleteHotel,demande_modificationHotel,demande_suppressionHotel} from '../../Projet-API/controllers/hotel.js';

const router =express.Router();
// Creer un hotel
router.post("/", createHotel);
router.post("/modification", demande_modificationHotel);

// Recuperer les hotels
router.get('/', getHotel);
router.get('/modification', getHotel_modifie);
router.get('/suppression/', getHotel_supprime);
router.get('/:id', getByID);

//Update un hotel
router.put('/:id',updateHotel);

//Supprimer un hotel
router.delete("/:id",deleteHotel)
router.delete("/suppression/:id",demande_suppressionHotel)

export default router
