import croisiereRoute from "./routes/croisiereR.js";
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from "dotenv"
import db from './configuration.js';


const app = express();
dotenv.config();
app.use(bodyParser.json());

// Vérifier si la connexion à la base de données a réussi
db.connect((err, client, release) => {
  if (err) {
    return console.error('Erreur de connexion à la base de données', err);
  }
  console.log('Connexion à la base de données réussie');
  client.release();
});


//API ENDPOINT
app.get('/',(req,res)=>res.status(200).send("Comment vas tu"));

app.use("/croisiere",croisiereRoute);



const port = 4000;
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});