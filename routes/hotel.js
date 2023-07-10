import express from 'express';
import { createHotel,updateHotel,getHotel,getByID,deleteHotel} from '../../Projet-API/controllers/hotel.js';

const router =express.Router();
// Creer un hotel
router.post("/", createHotel);

// Recuperer les hotelsd
router.get('/', getHotel);
router.get('/:id', getByID);

//Update un hotel
router.put('/:id',updateHotel);

//Supprimer un hotel
router.delete("/:id",deleteHotel)


export default router
