import mongoose from "mongoose";

const ldSchema = mongoose.Schema(
  {
    team_name: {
      type: String,
    },
    wins: {
      type: Number,
    },
    losess: {
      type: Number,
    },
    ties: {
      type: Number,
    },
    score: {
      type: Number,
    },
  },
  { collection: "leaderboard", timestamps: true }
);

let WiModel = mongoose.model("leaderboard", ldSchema);

export default WiModel;
