import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import path from "path";



const app = express();
const server = createServer(app);
const io = connectToSocket(server);
const __dirname = path.resolve();   // ✅ ADD THIS


app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));
app.use("/api/v1/users", userRoutes);

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/", (req, res) => {
    res.send("create the server");
})

app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "frontend/build/index.html");
    );
});


const start = async () => {
    const connectionDB = await mongoose.connect("mongodb+srv://jayshregaikawad_db_user:dUuA0Q3mVc9uWCEN@cluster0.hkzwsjz.mongodb.net/");
    console.log(`MONGO Connected DB Host: ${connectionDB.connection.host}`);

    server.listen(app.get("port"), () => {
        console.log("Listening on port 8000");
    })
}
start();