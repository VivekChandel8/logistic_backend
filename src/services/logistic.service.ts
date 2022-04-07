import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";

import LogisticModel, { LogisticDocument, CreateLogisticDocument } from "../models/logistic";

export function createData(input: DocumentDefinition<CreateLogisticDocument>) {
  return LogisticModel.create(input);
}

export function findData(
  query: FilterQuery<LogisticDocument>,
  options: QueryOptions = { lean: true }
) {
  return LogisticModel.find(query, {}, options);
}

export function findAndUpdateData(
  query: FilterQuery<LogisticDocument>,
  update: UpdateQuery<LogisticDocument>,
  options: QueryOptions = { lean: true }
) {
  return LogisticModel.findOneAndUpdate(query, update, options);
}

export function deleteData(query: FilterQuery<LogisticDocument>) {
  return LogisticModel.deleteOne(query);
}
