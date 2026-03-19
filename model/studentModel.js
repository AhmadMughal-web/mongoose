import mongoose from "mongoose";
import studentSchema from "../schema/studentSchema.js";

const studentModel = mongoose.model("students", studentSchema,'student');

export default studentModel;