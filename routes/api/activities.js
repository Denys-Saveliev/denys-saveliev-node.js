const express = require("express");
const { activities: ctrl } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middlewares");
const { joiSchema, completedJoiSchema } = require("../../models/activity");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/", validation(joiSchema), ctrlWrapper(ctrl.add));

router.patch(
  "/:activityId",
  validation(completedJoiSchema),
  ctrlWrapper(ctrl.updateById)
);

module.exports = router;
