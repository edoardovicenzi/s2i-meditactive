import { IntervalDTO } from "../DataTransferObjects/Interval.js";
import { Database } from "./Database.js";

export class IntervalRepository {
    #connection;
    #DATE_OPTIONS = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    }
    constructor() {
        this.#connection = Database.getInstance();
    }

    // Get all

    async getAll() {
        try {
            const [rows, fields] = await this.#connection.query(
                'SELECT * FROM tblInterval',
            );

            const formattedResults = this.#formatDatesFromRows(rows);

            return formattedResults;
        } catch (err) {
            throw new Error(`Unable to update interval: ${err.message}`)
        }
    }

    // Get one

    async getById(id) {
        try {
            if (!id) {
                throw new Error("Id Not Provided");
            }
            const [rows, fields] = await this.#connection.execute(
                'SELECT * FROM tblInterval WHERE id = ?',
                [id]
            );

            const formattedResults = this.#formatDatesFromRows(rows);

            return formattedResults;
        } catch (err) {
            throw new Error(`Unable to update interval: ${err.message}`)
        }
    }

    // Delete one

    async deleteById(id) {
        try {
            if (!id) {
                throw new Error("Id Not Provided");
            }
            const [rows, fields] = await this.#connection.execute(
                'DELETE FROM tblInterval WHERE id = ?',
                [id]
            );
            return rows;
        } catch (err) {
            throw new Error(`Unable to update interval: ${err.message}`)
        }
    }

    // create one

    async create(interval = {}) {
        try {
            //Input sanitization
            if (!typeof interval === 'object') {
                throw new Error("Please provide an Interval object");
            }
            const newInterval = new IntervalDTO(interval);

            //Call db
            const [rows, fields] = await this.#connection.execute(
                'INSERT INTO tblInterval (start_date, end_date, user_id) VALUES (?, ? ,?)',
                [newInterval.getStartDate(), newInterval.getEndDate(), newInterval.getUserId()]
            );
            return rows;
        } catch (err) {
            throw new Error(`Unable to update interval: ${err.message}`)
        }

    }

    // update one

    async updateOne(id, interval = {}) {
        try {
            const updateQuery = new IntervalDTO();

            //Input sanitization
            if (!typeof interval === 'object') {
                throw new Error("Must provide a Interval object");
            }

            updateQuery.setAsPutData(interval);
            //The order is important so we order them now
            const keys = [];
            const values = [];

            Object.entries(updateQuery).forEach(([key, value]) => {
                if (key !== "id") {
                    keys.push(key);
                    values.push(value);
                }
            })

            //Call db
            //The query will map through the elements and append " = ?" for the prepared statement
            const [rows, fields] = await this.#connection.execute(
                `UPDATE tblInterval SET ${keys.map(el => `${el} = ?`).join(",")} WHERE id = ${id}`,
                [...values]
            );
            return rows;
        } catch (err) {
            throw new Error(`Unable to update interval: ${err.message}`)
        }

    }

    #formatDatesFromRows(rows) {
        return rows.map((row) => {
            for (const [key, value] of Object.entries(row)) {
                if (key === "start_date" || key === "end_date") {
                    row[key] = new Date(value).toLocaleDateString("it-IT", this.#DATE_OPTIONS);
                }
            }
            return row
        });
    }

}
