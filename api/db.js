import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1413@Lucas900999',
    database: 'blog'
});