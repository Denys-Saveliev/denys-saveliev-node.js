const { Activity } = require("../../models");

const updateById = async (req, res) => {
  const { activityId } = req.params;
  const updatedActivity = await Activity.findByIdAndUpdate(
    activityId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({
    status: "success",
    code: 200,
    updatedActivity,
  });
};

module.exports = updateById;
