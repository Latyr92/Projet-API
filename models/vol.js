import client from '../configuration.js';

const Vol = {
  create: (nouveauVol) => {
    const query = `
      INSERT INTO reservation_vol (image, heure_depart, heure_arrivee, duree_vol, compagnie, aeroport_depart, escale, aeroport_arrivee, prix)
      VALUES ($1, $2, $3, $4, $5,$6,$7,$8,$9)`;
      
    const values = [
      nouveauVol.image,
      nouveauVol.heure_depart,
      nouveauVol.heure_arrivee,
      nouveauVol.duree_vol,
      nouveauVol.compagnie,
      nouveauVol.aeroport_depart,
      nouveauVol.escale,
      nouveauVol.aeroport_arrivee,
      nouveauVol.prix
      
    ];

    return client.query(query, values);
  },

  update: (volId, volModifie) => {
    const query = `
      UPDATE reservation_vol
      SET image = $1, heure_depart = $2, heure_arrivee = $3, duree_vol = $4, compagnie = $5, aeroport_depart = $6, escale = $7, aeroport_arrivee = $8, prix=$9
      WHERE id = $10`;
      
    const values = [
                     volModifie.image,
                     volModifie.heure_depart,
                     volModifie.heure_arrivee,
                     volModifie.duree_vol,
                     volModifie.compagnie,
                     volModifie.aeroport_depart,
                     volModifie.escale,
                     volModifie.aeroport_arrivee,
                     volModifie.prix,
                     volId
    ];

    return client.query(query, values);
  },

  delete: (volId) => {
    const query = `
    DELETE FROM reservation_vol
    WHERE id = $1`;
    
    const values = [
      volId
    ];

    return client.query(query, values);
  },
  
  getByID: (volId) => {
    const query = `
      select * from reservation_vol
      WHERE id = $1`;
      
    const values = [
      volId
    ];

    return client.query(query, values);
  },


};

export default Vol;
