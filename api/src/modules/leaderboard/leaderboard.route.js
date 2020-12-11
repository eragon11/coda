import express from "express";
import ldctrl from "./leaderboard.controller";
const router = express.Router();

//Get all teams data
router.get("/list", ldctrl.getAllTeamsList);

//Add a new team as win,lose or tie
router.post("/assign", ldctrl.assign);

export default router;