import client from '../configuration.js';

const Utilisateur = {
  create: (newutilisateur) => {
    const query = `
      INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, isadmin)
      VALUES ($1, $2, $3, $4, $5)`;
      
    const values = [
      newutilisateur.nom,
      newutilisateur.prenom,
      newutilisateur.email,
      newutilisateur.mot_de_passe,
      newutilisateur.isadmin
    ];

    return client.query(query, values);
  },

  update: (utilisateurId, utilisateurModifie) => {
    const query = `
      UPDATE utilisateur
      SET nom = $1, prenom = $2, email = $3, mot_de_passe = $4, isadmin = $5
      WHERE id = $6`;
      
    const values = [
      utilisateurModifie.nom,
      utilisateurModifie.prenom,
      utilisateurModifie.email,
      utilisateurModifie.mot_de_passe,
      utilisateurModifie.isadmin,
      utilisateurId
    ];

    return client.query(query, values);
  },

  delete: (utilisateurId) => {
    const query = `
    DELETE FROM utilisateur
    WHERE id = $1`;
    
    const values = [
      utilisateurId
    ];

    return client.query(query, values);
  },
  
  getByID: (utilisateurId) => {
    const query = `
      select * from utilisateur
      WHERE id = $1`;
      
    const values = [
      utilisateurId
    ];

    return client.query(query, values);
  },


};

export default Utilisateur;

