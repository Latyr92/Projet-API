import db from '../configuration.js';
import croisiere from "../models/croisiereM.js";

export const createCroisiere = async (req,res)=>{

  const nouveaucroisiere = {
    title: req.body.title,
    dure: req.body.dure,
    prix: req.body.prix,
    port: req.body.port
  };


  croisiere.create(nouveaucroisiere)
    .then(() => {
      res.json({ message: 'croisiere créé avec succès' });
    })
    .catch((error) => {
      console.error('Erreur lors de la création de croisiere', error);
      res.status(500).json({ error: 'Erreur lors de la création de  croisiere' });
    });

}


export const getCroisiere = async (req,res)=>{

  db.query('SELECT * from croisiere  ', (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête', err);
      res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    } else {
      res.json(result.rows);
    }
  });

}

export const updateCroisiere = async (req,res)=>{
  const croisiereId = req.params.id;
  const nouveaucroisiere = {
    title:req.body.title,
    dure: req.body.dure,
    prix: req.body.prix,
    port: req.body.port,
  };


  croisiere.update(croisiereId,nouveaucroisiere)
    .then(() => {
      res.json({ message: 'croisiere modifié avec succès' });
    })
    .catch((error) => {
      console.error('Erreur lors de la modification de croisiere', error);
      res.status(500).json({ error: 'Erreur lors de la création de croisiere' });
    });

}


export const deleteCroisiere = async (req,res)=>{
  const croisiereId = req.params.id;
  croisiere.delete(croisiereId)
    .then(() => {
      res.json({ message: 'croisiere supprimer avec succès' });
    })
    .catch((error) => {
      console.error('Erreur lors de la suppression de croisiere', error);
      res.status(500).json({ error: 'Erreur lors de la création de  croisiere' });
    });

}


export const getByID = async (req,res)=>{
  const croisiereId = req.params.id;
  try {
    const croisiere = (await croisiere.getByID(croisiereId)).rows;
    res.json({ croisiere });
  } catch (error) {
    console.error('Erreur lors de la récupération de croisiere', error);
    res.status(500).json({ error: 'Erreur lors de la récupération de croisiere' });
  }

}



