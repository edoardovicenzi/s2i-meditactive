import { isObjectEmpty, isStringLettersOrSpacesOnly, isValidEmail } from "../Utility/functions.js";

export class UserDTO {
    #id;
    #name;
    #surname;
    #email;

    constructor(newUser = {}) {
        if (isObjectEmpty(newUser)) {
            return
        }
        if (!newUser.hasOwnProperty("name")) {
            throw new Error("User name must be provided");
        }
        else {
            this.setName(newUser.name)
        }
        if (!newUser.hasOwnProperty("surname")) {
            throw new Error("User surname must be provided");
        }
        else {
            this.setName(newUser.surname)
        }
        if (!newUser.hasOwnProperty("email")) {
            throw new Error("User email must be provided");
        }
        else {
            this.setEmail(newUser.email)
        }
    }

    //Setter
    setAsPutData(updateUser = {}) {
        if (isObjectEmpty(updateUser)) {
            throw new Error("User object must not be empty");
        }
        if (!updateUser.hasOwnProperty("name") && !updateUser.hasOwnProperty("surname") && !updateUser.hasOwnProperty("email")) {
            throw new Error("To update a User you must provide at least one of: name, surname or email.");
        }
        if (updateUser.hasOwnProperty("name")) {
            this.setName(updateUser.name.toString().trim());
        }
        if (updateUser.hasOwnProperty("surname")) {
            this.setSurname(updateUser.surname.toString().trim());
        }
        if (updateUser.hasOwnProperty("email")) {
            this.setEmail(updateUser.email.toString().trim());
        }

    }
    setId(newId) {
        this.#id = newId;
        return this;
    }
    setName(newName) {
        if (!isStringLettersOrSpacesOnly(newName)) {
            throw new Error("User name must contain only words and spaces and cannot be an object");
        }
        this.#name = newName;
        return this;
    }
    setSurname(newSurname) {
        if (!isStringLettersOrSpacesOnly(newSurname)) {
            throw new Error("User name must contain only words and spaces and cannot be an object");
        }
        this.#surname = newSurname;
        return this;
    }
    setEmail(newEmail) {
        if (!isValidEmail(newEmail)) {
            throw new Error("User email must be valid");
        }
        this.#email = newEmail;
        return this;
    }

    //Getter

    getId() {
        return this.#id;
    }
    getName() {
        return this.#name;
    }
    getSurname() {
        return this.#name;
    }
    getEmail() {
        return this.#email;
    }


    //Utility

    toObject() {
        return {
            id: this.#id,
            name: this.#name,
            surname: this.#surname,
            email: this.#email
        }
    }

}
