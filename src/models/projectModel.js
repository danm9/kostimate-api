import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProjectSchema = new Schema({
  projectOwner: {
    type: String,
    required: "Enter an email for project owner",
  },
  projectType: {
    type: String,
    required: "Enter a project type",
  },
  projectCost: {
    type: Number,
  },
  laborCost: {
    type: Number,
  },
  expenseCost: {
    type: Number,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  resources: {
    type: Array,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
