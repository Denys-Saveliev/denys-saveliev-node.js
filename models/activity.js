const { Schema, model } = require("mongoose");
const Joi = require("joi");

const activitySchema = Schema(
  {
    activity: String,
    key: String,
    type: String,
    selected: Boolean,
    completed: Boolean,
    date: Number,
  },
  { versionKey: false, timestamps: true }
);

const Activity = model("activity", activitySchema);

const joiSchema = Joi.object({
  activity: Joi.string().required(),
  key: Joi.string(),
  type: Joi.string().required(),
  selected: Joi.boolean(),
  completed: Joi.boolean(),
  date: Joi.number(),
});

const completedJoiSchema = Joi.object({
  selected: Joi.boolean().required(),
  completed: Joi.boolean().required(),
  date: Joi.number().required(),
});

module.exports = {
  Activity,
  joiSchema,
  completedJoiSchema,
};
