import mysql from 'mysql2/promise';

let Connection;
export async function connectToDatabase() {
    if(!Connection){
        Connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            });
        Connection.connect((err) => {
            if (err) {
                console.log(err);
            }

        });
    }
    return Connection;
}   
