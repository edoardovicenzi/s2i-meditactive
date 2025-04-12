import { UnitOfWork } from "../DataAccessLayer/UnitOfWork.js";

export class IntervalDTO {
    #id;
    #end_date;
    #start_date;
    #user_id;

    #uow = new UnitOfWork();

    constructor(newInterval = {}) {
        if (isObjectEmpty(newInterval)) {
            return
        }
        if (!newInterval.hasOwnProperty("start_date")) {
            throw new Error("Interval start_date must be provided");
        }
        else {
            this.setStartDate(newInterval.start_date);
        }
        if (!newInterval.hasOwnProperty("end_date")) {
            throw new Error("Interval end_date must be provided");
        }
        else {
            this.setEndDate(newInterval.end_date);
        }
        if (!newInterval.hasOwnProperty("user_id")) {
            throw new Error("Interval user_id must be provided");
        }
        else {
            this.setUserId(newInterval.user_id)
        }
    }

    //Setter
    setStartDate(newDate) {
        if (!(new Date(newDate))) {
            throw new Error("Interval start_date must be a valid date");
        }
        this.#start_date = new Date(newDate);
        this.checkEndDate();
        return this;
    }
    setEndDate(newDate) {
        if (!(new Date(newDate))) {
            throw new Error("Interval end_date must be a valid date");
        }
        this.#end_date = new Date(newDate);
        this.checkEndDate();
        return this;
    }
    async setUserId(newId) {
        if (!parseInt(newId)) {
            throw new Error("Interval user_id must be a valid integer");
        }
        //TEST: set user id
        if (await this.#uow.users.getById(newId).length == 0) {
            throw new Error("Interval user_id must refer to a present user");
        }
        this.#user_id = newId;
        return this;
    }
    setId(newId) {
        this.#id = newId;
        return this;
    }
    setAsPutData(updateInterval = {}) {
        if (!updateInterval.hasOwnProperty("start_date") && !updateInterval.hasOwnProperty("end_date") && !updateInterval.hasOwnProperty("user_id")) {
            throw new Error("To update an Interval you must provide at least one of: start_date, end_date or user_id");
        }
        if (updateInterval.hasOwnProperty("start_date")) {
            this.setStartDate(updateInterval.start_date)
        }
        if (updateInterval.hasOwnProperty("startEnd")) {
            this.setEndDate(updateInterval.end_date)
        }
        if (updateInterval.hasOwnProperty("user_id")) {
            this.setUserId(updateInterval.user_id)
        }
    }
    //Getter
    getId() {
        return this.#id;
    }
    getStartDate() {
        return this.#start_date;
    }
    getEndDate() {
        return this.#start_date;
    }
    getUserId() {
        return this.#user_id;
    }

    //Utility
    toObject() {
        return {
            id: this.#id,
            start_date: this.#start_date,
            end_date: this.#end_date,
            user_id: this.#user_id
        }
    }

    isEndDateValid() {
        if (this.#start_date > this.#end_date) {
            return false
        }
        return true
    }

    checkEndDate() {
        if (this.#start_date && this.#end_date) {
            if (!this.isEndDateValid()) {
                throw new Error("Interval end_date must be greater than start_date");
            }
        }
    }

}
