"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const create = (userdetails) => user_schema_1.userModel.create(Object.assign({}, userdetails));
const findOne = (email) => __awaiter(void 0, void 0, void 0, function* () { return user_schema_1.userModel.findOne({ email: email }); });
const getAll = () => __awaiter(void 0, void 0, void 0, function* () { return user_schema_1.userModel.find().select('email'); });
const pushSlip = (slip, submitted_by) => __awaiter(void 0, void 0, void 0, function* () { return user_schema_1.userModel.findOneAndUpdate({ email: slip.requested_to }, { $push: { requests: { department: slip.department, submitted_by: submitted_by, activity_details: slip.activity_details, description: slip.description } } }); });
const getPendingSlips = (userId) => __awaiter(void 0, void 0, void 0, function* () { return user_schema_1.userModel.findOne({ _id: userId }).select("requests"); });
exports.default = { create, findOne, getAll, pushSlip, getPendingSlips };
//# sourceMappingURL=user.repo.js.map