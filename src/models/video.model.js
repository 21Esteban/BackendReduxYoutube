import mongoose from "mongoose";

const { Schema, model } = mongoose;

const videoSchema = new Schema({
  title: { type: String, required: [true, "El titulo es obligatorio"] },
  views: { type: String, required: [true, "El views es obligatorio"] },
  date: Date,
  videoId: { type: String, required: [true, "El videoId es obligatorio"] },
  linkImg: { type: String, required: [true, "El titulo es obligatorio"] },
  category: { type: String, required: [true, "la category es obligatorio"] },
  channelName: { type: String, required: [true, "El channelName es obligatorio"] },
  channelLinkImg: { type: String, required: [true, "El channelLinkImg es obligatorio"] },
},{timestamps:true,versionKey:false});

export const videoModel =model("video",videoSchema)