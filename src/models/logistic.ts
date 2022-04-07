import { Schema, model, Document } from "mongoose";

export interface CreateLogisticDocument extends Document{
    pn: string;
    supplier: string;
    deliveryDate: Date;
    qty: number;
}
export interface LogisticDocument extends Document{
    pn: string;
    supplier: string;
    deliveryDate: Date;
    qty: number;
    tracking: string;
    trackingStatus: string;
    markDelivered: string;
}


interface Logistic {
  pn: string;
  supplier: string;
  deliveryDate: Date;
  qty: number;
  tracking: string;
  trackingStatus: string;
  markDelivered: string;
  createdAt: Date;
  updatedAt: Date;
}

const logisticSchema = new Schema<Logistic>({
  pn: {
    type: String,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  tracking: {
    type: String,
  },
  trackingStatus: {
    type: String,
  },
  markDelivered: {
    type: String,
    required: true,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const LogisticModel = model<Logistic>("Logistic", logisticSchema);
export default LogisticModel;
