import mongoose, { connect } from "mongoose";

const connects = () => {
  return connect("mongodb://localhost:27017/logistic")
    .then(() => {
      console.log("Database Connected!");
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export default connects;
