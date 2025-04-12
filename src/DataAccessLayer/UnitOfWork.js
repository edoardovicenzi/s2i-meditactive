import { IntervalRepository } from "./IntervalRepository.js";
import { UserRepository } from "./UserRepository.js";

export class UnitOfWork {
    constructor() {
        this.users = new UserRepository();
        this.intervals = new IntervalRepository();
    }
}
