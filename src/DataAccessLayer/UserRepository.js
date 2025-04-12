import { UserDTO } from "../DataTransferObjects/User.js";
import { Database } from "./Database.js";

export class UserRepository {
    #connection;
    constructor() {
        this.#connection = Database.getInstance();
    }

    // Get all

    async getAll() {
        try {
            const [rows, fields] = await this.#connection.query(
                'SELECT * FROM tblUser',
            );
            return rows;
        } catch (err) {
            throw new Error(`Unable to update user: ${err.message}`)
        }
    }

    // Get one

    async getById(id) {
        try {
            if (!id) {
                throw new Error("Id Not Provided");
            }
            const [rows, fields] = await this.#connection.execute(
                'SELECT * FROM tblUser WHERE id = ?',
                [id]
            );
            return rows;
        } catch (err) {
            throw new Error(`Unable to update user: ${err.message}`)
        }
    }

    // Delete one

    async deleteById(id) {
        try {
            if (!id) {
                throw new Error("Id Not Provided");
            }
            const [rows, fields] = await this.#connection.execute(
                'DELETE FROM tblUser WHERE id = ?',
                [id]
            );
            return rows;
        } catch (err) {
            throw new Error(`Unable to update user: ${err.message}`)
        }
    }

    // create one

    async create(user = {}) {
        try {
            //Input sanitization
            if (!typeof user === 'object') {
                throw new Error("Must provide a User object");
            }
            const newUser = new UserDTO(user);

            //Call db
            const [rows, fields] = await this.#connection.execute(
                'INSERT INTO tblUser (name, surname, email) VALUES (?, ? ,?)',
                [newUser.getName(), newUser.getSurname(), newUser.getEmail()]
            );
            newUser.setId(rows.insertId);
            return newUser;
        } catch (err) {
            throw new Error(`Unable to update user: ${err.message}`)
        }

    }

    // update one

    async updateOne(id, user = {}) {
        try {
            const updateUser = new UserDTO();

            //Input sanitization
            if (!typeof user === 'object') {
                throw new Error("Please provide a User object.");
            }

            updateUser.setAsPutData(user);

            const keys = [];
            const values = [];

            Object.entries(updateUser).forEach(([key, value]) => {
                if (key !== "id") {
                    keys.push(key);
                    values.push(value);
                }
            });

            //Call db
            //The query will map through the elements and append " = ?" for the prepared statement
            const [rows, fields] = await this.#connection.execute(
                `UPDATE tblUser SET ${keys.map(el => `${el} = ?`).join(",")} WHERE id = ${id}`,
                [...values]
            );
            return rows;
        } catch (err) {
            throw new Error(`Unable to update user: ${err.message}`)
        }

    }

}
