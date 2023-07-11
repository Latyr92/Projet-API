import db from '../../api/configuration.js';
import Hotel from "../models/hotel.js";


export const createHotel = async (req,res)=>{

  const nouveauHotel = {
    nom: req.body.nom,
    localisation: req.body.localisation,
    prix: req.body.prix,
    note: req.body.note,
    photo: req.body.photo
  };

  Hotel.create(nouveauHotel)
    .then(() => {
      res.json({ message: 'Hotel créé avec succès' });
    })
    .catch((error) => {
      console.error('Erreur lors de la création de l Hotel', error);
      res.status(500).json({ error: 'Erreur lors de la création de l Hotel' });
    });

}

export const getHotel = async (req,res)=>{

  db.query('SELECT * from hotel  ', (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête', err);
      res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    } else {
      res.json(result.rows);
    }
  });

}

export const updateHotel = async (req,res)=>{
  const hotelId = req.params.id;
  const nouveauHotel = {
    nom: req.body.nom,
    localisation: req.body.localisation,
    prix: req.body.prix,
    note: req.body.note,
    photo: req.body.photo
  };

  Hotel.update(hotelId,nouveauHotel)
    .then(() => {
      res.json({ message: 'Hotel modifié avec succès' });
    })
    .catch((error) => {
      console.error('Erreur lors de la modification de l Hotel', error);
      res.status(500).json({ error: 'Erreur lors de la création de l Hotel' });
    });

}

export const deleteHotel = async (req,res)=>{
  const hotelId = req.params.id;
  Hotel.delete(hotelId)
    .then(() => {
      res.json({ message: 'Hotel supprimer avec succès' });
    })
    .catch((error) => {
      console.error('Erreur lors de la suppression de l Hotel', error);
      res.status(500).json({ error: 'Erreur lors de la création de l Hotel' });
    });

}


export const getByID = async (req,res)=>{
  const hotelId = req.params.id;
  try {
    const hotel = (await Hotel.getByID(hotelId)).rows;
    res.json({ hotel });
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'hôtel', error);
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'hôtel' });
  }

}




