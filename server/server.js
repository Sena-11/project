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

app.use((req, res) => {
    res.status(404).send("Not Found")
})

app.listen(PORT, () => {
    console.log(`Server running in ${PORT} port`)
})
