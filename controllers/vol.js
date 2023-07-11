import db from '../configuration.js';
import Vol from "../models/vol.js";


export const createVol = async (req,res)=>{

  const nouveauVol = {
    image: req.body.image,
    heure_depart: req.body.heure_depart,
    heure_arrivee: req.body.heure_arrivee,
    duree_vol: req.body.duree_vol,
    compagnie: req.body.compagnie,
    aeroport_depart: req.body.aeroport_depart,
    escale: req.body.escale,
    aeroport_arrivee : req.body.aeroport_arrivee, 
    prix: req.body.prix 


  };

  Vol.create(nouveauVol)
    .then(() => {
      res.json({ message: 'Vol créé avec succès' });
    })
    .catch((error) => {
      console.error('Erreur lors de la création du Vol', error);
      res.status(500).json({ error: 'Erreur lors de la création du Vol' });
    });

}

export const getVol = async (req,res)=>{

  db.query('SELECT * from reservation_vol  ', (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête', err);
      res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    } else {
      res.json(result.rows);
    }
  });

}

export const updateVol = async (req,res)=>{
  const volId = req.params.id;
  const nouveauVol = {
                     image: req.body.image,
                     heure_depart: req.body.heure_depart,
                     heure_arrivee: req.body.heure_arrivee,
                     duree_vol: req.body.duree_vol,
                     compagnie: req.body.compagnie,
                     aeroport_depart: req.body.aeroport_depart,
                     escale: req.body.escale,
                     aeroport_arrivee : req.body.aeroport_arrivee, 
                     prix: req.body.prix 
  };

  Vol.update(volId,nouveauVol)
    .then(() => {
      res.json({ message: 'Vol modifié avec succès' });
    })
    .catch((error) => {
      console.error('Erreur lors de la modification du Vol', error);
      res.status(500).json({ error: 'Erreur lors de la modification du Vol' });
    });

}

export const deleteVol = async (req,res)=>{
  const volId = req.params.id;
 Vol.delete(volId)
    .then(() => {
      res.json({ message: 'Vol supprimer avec succès' });
    })
    .catch((error) => {
      console.error('Erreur lors de la suppression du Vol', error);
      res.status(500).json({ error: 'Erreur lors de la création du Vol' });
    });

}


export const getByID = async (req,res)=>{
  const volId = req.params.id;
  try {
    const vol = (await Vol.getByID(volId)).rows;
    res.json({ vol });
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'vol', error);
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'vol' });
  }

}



