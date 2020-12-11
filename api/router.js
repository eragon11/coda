import express from "express";
import leaderBoardRouter from './src/modules/leaderboard/leaderboard.route';


let router = express.Router();

router.use("/ld", leaderBoardRouter);

export default router;