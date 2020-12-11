import Ld from "./leaderboard.model";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const LdService = {};

LdService.getAllTeamsList = async () => {
  try {
    const ld = await Ld.find({});
    console.log(ld.length);
    return ld;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

LdService.getSpecificLdall = async (id) => {
  try {
    const ld = await Ld.findOne({ _id: ObjectId(id)});
    return ld;
  } catch (err) {
   console.log(err);
    throw err;
  }
};

LdService.modelExists = async (modelname) => {
  try {
    const ld = await Ld.find({ modelname: modelname });
    return ld;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

LdService.addld = async (ld) => {
  try {
    let ldToAdd = new Ld(ld);
    const savedLd = await ldToAdd.save();
    return savedLd;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default LdService;
