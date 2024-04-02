import { Document, model, models, Schema } from "mongoose";

export interface IImage extends Document {
  title: string;
  tranformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const ImageSchema = new Schema({
  title: { type: String, reqired: true },
  tranformationType: { type: String, reqired: true },
  publicId: { type: String, reqired: true },
  secureUrl: { type: URL, reqired: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, defaukt: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
