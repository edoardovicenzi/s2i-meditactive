import mysql from 'mysql2/promise';

export class Database {

    static #instance;

    constructor() {
    }

    static getInstance() {
        if (this.#instance == null) {
            try {
                const pool = mysql.createPool({
                    host: 'localhost',
                    user: 'meditactive',
                    password: 'meditactiveStart2Impact',
                    database: 'meditactive',
                    waitForConnections: true,
                    connectionLimit: 10,
                    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
                    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
                    queueLimit: 0,
                    enableKeepAlive: true,
                    keepAliveInitialDelay: 0,
                });
                this.#instance = pool;
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
        return this.#instance;
    }
}
