import ldService from "./leaderboard.service";

const LdController = {};

LdController.assign = async (req, res) => {
  try {
    let wi = {};
    wi.modelname = req.body.modelname;
    wi.animationsname = req.body.animationsname;
    wi.animinstructions = req.body.animinstructions;
    wi.version = req.body.version;

    let model_exists = await ldService.modelExists(wi.modelname);
    if (model_exists != undefined) {
      let savedwi = await ldService.addwi(wi);
      console.log(savedwi);
      res.status(200).send({
        code: 200,
        status: "success",
        message: "Successfully added wi",
        data: { _id: savedwi._id, url: signedUrlPut },
      });
    } else {
      res.status(400).send({
        code: 400,
        status: "error",
        message: "Already model name exists",
        data: savedLd,
      });
    }
  } catch (error) {
    console.log("Error in adding wi :" + error);
    res.status(400).send({
      code: 400,
      status: "error",
      message: "Error in adding wi",
      data: [],
    });
  }
};

LdController.getAllTeamsList = async (req, res) => {
  try {
    const wi = await ldService.getAllTeamsList();
    res.send({
      code: 200,
      status: "success",
      message: "Listing All Ld's",
      data: wi,
    });
  } catch (error) {
      console.log(error);
    res.status(400).send({
      code: 400,
      status: "error",
      message: "Error in getting wi record",
      data: [],
    });
  }
};

export default LdController;
