import client from '../configuration.js';

const Hotel = {
  create: (nouveauHotel) => {
    const query = `
      INSERT INTO hotel (nom, localisation, prix, note, photo)
      VALUES ($1, $2, $3, $4, $5)`;
      
    const values = [
      nouveauHotel.nom,
      nouveauHotel.localisation,
      nouveauHotel.prix,
      nouveauHotel.note,
      nouveauHotel.photo
    ];

    return client.query(query, values);
  },

  demande_modification: (nouveauHotel) => {
    const query = `
      INSERT INTO hotel_modification (nom, localisation, prix, note, photo, id_hotel)
      VALUES ($1, $2, $3, $4, $5, $6)`;
      
    const values = [
      nouveauHotel.nom,
      nouveauHotel.localisation,
      nouveauHotel.prix,
      nouveauHotel.note,
      nouveauHotel.photo,
      nouveauHotel.id_hotel,
    ];

    return client.query(query, values);
  },
  
  demande_suppression: (hotelId) => {
    const query = `
      INSERT INTO demande_suppression (type, id_element)
      VALUES ($1, $2)`;
      
    const values = [
      "hotel",
       hotelId
      
    ];

    return client.query(query, values);
  },

  update: (hotelId, hotelModifie) => {
    const query = `
      UPDATE hotel
      SET nom = $1, localisation = $2, prix = $3, note = $4, photo = $5
      WHERE id = $6`;
      
    const values = [
      hotelModifie.nom,
      hotelModifie.localisation,
      hotelModifie.prix,
      hotelModifie.note,
      hotelModifie.photo,
      hotelId
    ];

    return client.query(query, values);
  },

  delete: (hotelId) => {
    const query = `
    DELETE FROM hotel
    WHERE id = $1`;
    
    const values = [
      hotelId
    ];

    return client.query(query, values);
  },
  
  getByID: (hotelId) => {
    const query = `
      select * from hotel
      WHERE id = $1`;
      
    const values = [
      hotelId
    ];

    return client.query(query, values);
  },


};

export default Hotel;

