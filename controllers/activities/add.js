const { Activity } = require("../../models");

const add = async (req, res) => {
  const newActivity = await Activity.create(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      newActivity,
    },
  });
};

module.exports = add;
