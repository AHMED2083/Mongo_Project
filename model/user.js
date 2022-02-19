import { Schema, model } from "mongoose";

const Schema = new Schema({
  name: { type: Schema.Types.string, required: true, default: "no user name" },
  email: { type: Schema.type.string, required: true },
  age: { type: Schema.type.string, required: false },
  password: { type: Schema.type.string, required: true },
});

export default model(MODEL_NAME, Schema);
