import express from "express";
import mysql from "mysql2/promise";



async function getConnection(){
    try{
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'meditactive',
            password: 'meditactiveStart2Impact',
            database: 'meditactive'
        })
        return await connection;
    } catch (err) {
        console.log(err);
        throw err;
    }

}



const app = express();
const HOSTNAME = "localhost";
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.get("/users", async (req, res) => {
    try {
        // execute will internally call prepare and query
        const connection = await getConnection();
        const [results, fields] = await connection.execute(
            'SELECT * FROM tblUser',
        );

        res.send(results); // results contains rows returned by server
        
    }
    catch (error) {

        res.send("An error occurred"); // results contains rows returned by server
        console.log(error);
    }
});

app.get("/intervals", async (req, res) => {
    try {
        // execute will internally call prepare and query
        const connection = await getConnection();
        const [results, fields] = await connection.execute(
            'SELECT * FROM tblUser',
        );

        res.send(results); // results contains rows returned by server
        
    }
    catch (error) {

        res.send("An error occurred"); // results contains rows returned by server
        console.log(error);
    }

});

app.get("*", (req, res) => {
    res.send("404");
});

app.listen(PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
