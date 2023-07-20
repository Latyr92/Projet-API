import client from '../configuration.js';

const croisiere = {
  create: (nouveaucroisiere) => {
    const query = `
      INSERT INTO croisiere (title, dure, prix, port)
      VALUES ($1, $2, $3, $4, $5)`;
      
    const values = [
      nouveaucroisiere.title,
      nouveaucroisiere.dure,
      nouveaucroisiere.prix,
      nouveaucroisiere.port,
    ];

    return client.query(query, values);
  },

  update: (croisiereId, croisiereModifie) => {
    const query = `
      UPDATE croisiere
      SET title = $1, dure = $2, prix = $3, port = $4
      WHERE id = $6`;
      
    const values = [
      croisiereModifie.title,
      croisiereModifie.dure,
      croisiereModifie.prix,
      croisiereModifie.port,
      croisiereId
    ];

    return client.query(query, values);
  },

  delete: (croisiereId) => {
    const query = `
    DELETE FROM croisiere
    WHERE id = $1`;
    
    const values = [
      croisiereId
    ];

    return client.query(query, values);
  },
  
  getByID: (croisiereId) => {
    const query = `
      select * from croisiere
      WHERE id = $1`;
      
    const values = [
      croisiereId
    ];

    return client.query(query, values);
  },

  


};

export default croisiere;
