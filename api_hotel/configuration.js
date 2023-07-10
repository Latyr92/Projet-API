//import pkg from 'pg';
import pg from 'pg';
const { Pool } = pg;

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;

// Utilisation des variables d'environnement dans votre configuration de base de données
// const dbConfig = {
//   user: dbUser,
//   password: dbPassword,
//   host: dbHost,
//   port: dbPort,
//   database: dbName,
// };


const dbConfig = {
  user: "aissatou",
  password: "aissatou123",
  host: "postgresql-135079-0.cloudclusters.net",
  port: 19994,
  database: "reservation_db",
};

const pool = new Pool(dbConfig);

export default pool;
