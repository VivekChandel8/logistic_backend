import express from "express";
import { createLogistic, updateLogistic, deleteLogistic, getAllData } from "../controllers/logisticDate";

const router = express.Router();


// Create Data --
router.post("/create", createLogistic);

// Get all Data --
router.get("/getAll", getAllData);

// Update Data --
router.post("/update", updateLogistic);

// Delete Data --
router.get("/delete", deleteLogistic)

export { router };
