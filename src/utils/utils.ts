import mongoose from "mongoose";

export const isValidDbId = (id: string) => mongoose.Types.ObjectId.isValid(id);
