import { Express } from "express";
import "dotenv/config"


const app = Express()


app.listen(process.env.PORT, () => {
    connectDB()
    console.log(`Running on port ${process.env.PORT}`);
});