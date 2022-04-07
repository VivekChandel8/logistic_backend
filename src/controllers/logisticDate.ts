import express, { Request, Response, NextFunction } from "express";
import LogisticModel, { LogisticDocument } from "../models/logistic";

import {
  createData,
  findData,
  findAndUpdateData,
  deleteData,
} from "../services/logistic.service";

const createLogistic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 204;
  let statusMessage = "No content";
  try {
    let payload = req.body;
    let data = await createData(payload);
    if (data) {
      statusCode = 200;
      statusMessage = "New Data created";
      res.locals.statusCode = statusCode;
      res.locals.statusMessage = statusMessage;
      res.locals.data = data;
    }
    res.json(res.locals);
  } catch (err) {
    next(err);
  }
};

const updateLogistic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 204;
  let statusMessage = "No content";
  try {
    let payload = req.body;
    payload.updatedAt = Date.now();
    let data = await findAndUpdateData({ _id: payload._id }, payload, {
      new: true,
    });
    if (data) {
      statusCode = 200;
      statusMessage = "Data updated";
      res.locals.statusCode = statusCode;
      res.locals.statusMessage = statusMessage;
      res.locals.data = data;
    }
    res.json(res.locals);
  } catch (err) {
    next(err);
  }
};
const getAllData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 204;
  let statusMessage = "No content";
  try {
    let data = await findData({});
    if (data) {
      statusCode = 200;
      statusMessage = "Fetched All Logistic Data";
      res.locals.statusCode = statusCode;
      res.locals.statusMessage = statusMessage;
      res.locals.data = data;
    }
    res.json(res.locals);
  } catch (err) {
    next(err);
  }
};

const deleteLogistic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 204;
  let statusMessage = "No content";
  try {
    let id = req.query.id;
    let data = await deleteData({ _id: id });
    if (data) {
      statusCode = 200;
      statusMessage = "Data Deleted";
      res.locals.statusCode = statusCode;
      res.locals.statusMessage = statusMessage;
      res.locals.data = data;
    }
    res.json(res.locals);
  } catch (err) {
    next(err);
  }
};

export { createLogistic, updateLogistic, deleteLogistic, getAllData };
