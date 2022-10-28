import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
    res.send("We are on posts");
});

export default router;