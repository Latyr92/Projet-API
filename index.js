import hotelRoute from "./routes/hotel.js";
import volRoute from "./routes/vol.js";
import croisiereRoute from "./routes/croisiereR.js";
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import db from './configuration.js';
import cors from "cors";

const app = express();
dotenv.config();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Vérifier si la connexion à la base de données a réussi
db.connect((err, client, release) => {
  if (err) {
    return console.error('Erreur de connexion à la base de données', err);
  }
  console.log('Connexion à la base de données réussie');
  client.release();
});

// API ENDPOINT
app.get('/', (req, res) => res.status(200).send("Hello World"));

app.use("/hotel", hotelRoute);
app.use("/vol", volRoute);
app.use("/croisiere", croisiereRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
