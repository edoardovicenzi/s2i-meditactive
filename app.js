import express from "express";
import { UnitOfWork } from "./src/DataAccessLayer/UnitOfWork.js";
import { responseHandler } from "./src/Middlewares/responseFormatter.js";

const uow = new UnitOfWork();

const app = express();
//Load middlewares
app.use(express.json());
//Load custom  middlewares
app.use(responseHandler);

const HOSTNAME = "localhost";
const PORT = 3000;

// || Home
app.get("/", async (req, res) => {
    res.success("Hello World!");
});


// || Users endpoints

// read users
app.get("/users", async (req, res) => {
    try {
        const result = await uow.users.getAll();

        if (!result) {
            throw { statusCode: 404, message: "No users found." }
        }
        res.success(result, 200);

    } catch (err) {
        res.error(err.message, err.statusCode);
    }
});

// read user
app.get("/users/:id", async (req, res) => {
    try {
        const result = await uow.users.getById(req.params.id);
        if (!result) {
            throw { statusCode: 404, message: "No user found with given id." }
        }
        res.success(result, 200);

    } catch (err) {
        res.error(err.message, err.statusCode);
    }
});

// create users
app.post("/users", async (req, res) => {
    try {
        const result = await uow.users.create(req.body.data);
        res.success(result.toObject(), 201)
    } catch (err) {
        res.error(err.message, err.statusCode);
    }
});

// update users
app.put("/users/:id", async (req, res) => {
    //Build response object
    const result = await uow.users.updateOne(req.params.id, req.body.data);
    res.send(JSON.stringify(result));
});

// delete user
app.delete("/users/:id", async (req, res) => {
    //Build response object
    res.setHeader("Content-Type", "application/json");

    const result = await uow.users.deleteById(req.params.id);
    res.send(JSON.stringify(result));
});


// || Intervals endpoints

// read users
app.get("/intervals", async (req, res) => {
    //Build response object
    res.setHeader("Content-Type", "application/json");

    const result = await uow.intervals.getAll();
    res.send(JSON.stringify(result));
});

// read user
app.get("/intervals/:id", async (req, res) => {
    //Build response object
    res.setHeader("Content-Type", "application/json");

    const result = await uow.intervals.getById(req.params.id);
    res.send(JSON.stringify(result));
});

// create interval
app.post("/intervals", async (req, res) => {
    //Build response object
    res.setHeader("Content-Type", "application/json");

    const result = await uow.intervals.create(req.params.data);
    res.send(JSON.stringify(result));
});

// update interval
app.put("/intervals/:id", async (req, res) => {
    //Build response object
    res.setHeader("Content-Type", "application/json");

    const result = await uow.intervals.updateOne(req.params.id, req.body.data);
    res.send(JSON.stringify(result));
});
// delete interval
app.delete("/intervals/:id", async (req, res) => {
    //Build response object
    res.setHeader("Content-Type", "application/json");

    const result = await uow.intervals.deleteById(req.params.id);
    res.send(JSON.stringify(result));
});


// || Error handling for any not known endpoints

app.get("*", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send("404");
});

app.listen(PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
