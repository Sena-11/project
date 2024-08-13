import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.send("What up bro")
})

app.get( "/register", (req, res) => {
    res.send( "register");
});

app.get ("/home", (req, res) => {
    res.send("home");
});

app.get ("/connect", (req, res) => {
    res.send( "connect");
});

app.get ("/logout", ( req, res) => {
    res.send( "logout");
});

app.get ("/contact", (req, res)  => {
    res.send("contact");
});

app.get ("/user",( req,res) => {
    res.send("user");
});

app.get ("/profile",( req, res) => {
    res.send("profile");
});

app.get ("/login",( req, res) => {
    res.send("login");
});

app.get ("/unconnect",( req,res) => {
    res.send( "unconnect");
});

app.use((req, res) => {
    res.status(404).send("Not Found")
})

app.listen(PORT, () => {
    console.log(`Server running in ${PORT} port`)
})
