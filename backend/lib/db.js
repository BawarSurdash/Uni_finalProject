import mysql from 'mysql2/promise';

export const connectToDatabase = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        
        console.log('Successfully connected to database');
        return connection;
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};   
