//import pkg from 'pg';
import pg from 'pg';
const { Pool } = pg;

const dbConfig = {
  user: "latyr",
  password: "latyr123",
  host: "postgresql-135079-0.cloudclusters.net",
  port: 19994,
  database: "reservation_db",
};

const pool = new Pool(dbConfig);

export default pool;
