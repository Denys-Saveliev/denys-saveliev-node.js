const { Activity } = require("../../models");

const getAll = async (req, res) => {
  const activities = await Activity.find({});
  res.json({
    status: "success",
    code: 200,
    activities,
  });
};

module.exports = getAll;
