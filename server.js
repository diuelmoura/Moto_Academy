import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/cards.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.get("/health", (req, res) => {
    res.json( {ok: true} );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API running on http://127.0.0.1:${PORT}`);
});