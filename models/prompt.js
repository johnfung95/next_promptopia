import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    // one to many relationship, 1 create / user = many prompts
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required!"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required!"],
  },
});

// check if user already exists in the models, else create one
const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;
