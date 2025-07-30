import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: Number(process.env.DATABASE_PORT),
//     ssl: {
//   rejectUnauthorized: false
// }

});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        process.exit(1); 
    }
    console.log('Connected to the database.');
});

export default db;
