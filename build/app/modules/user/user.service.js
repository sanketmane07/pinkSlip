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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authorize_1 = require("../../utility/authorize");
const password_1 = require("../../utility/password");
const user_constants_1 = require("./user.constants");
const user_repo_1 = __importDefault(require("./user.repo"));
const login = (userDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_repo_1.default.findOne(userDetails.email);
        console.log(user);
        const isMatched = (0, password_1.comparePassword)(userDetails.password, user.password);
        if (user && isMatched) {
            const accessToken = (0, authorize_1.createToken)({ id: user._id, email: user.email });
            return { accessToken: accessToken };
        }
        throw user_constants_1.userConstants.INVALID_DETAILS;
    }
    catch (error) {
        throw user_constants_1.userConstants.FAILED;
    }
});
const createUser = (userDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_repo_1.default.create(userDetails);
        return user_constants_1.userConstants.USER_ADDED;
    }
    catch (error) {
        throw error;
    }
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.getAll();
    }
    catch (error) {
        throw user_constants_1.userConstants.FAILED;
    }
});
const generatePinkSlip = (slip, submitted_by) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_repo_1.default.pushSlip(slip, submitted_by);
        return user_constants_1.userConstants.SLIP_GENERATED;
    }
    catch (error) {
        throw user_constants_1.userConstants.FAILED;
    }
});
const getAllPendingSlips = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requests = yield user_repo_1.default.getPendingSlips(userId);
        return requests.map((data) => data.slip_status === 'pending') || user_constants_1.userConstants.NO_PENDING_SLIPS;
    }
    catch (error) {
        throw user_constants_1.userConstants.FAILED;
    }
});
exports.default = { createUser, login, getAllUsers, generatePinkSlip, getAllPendingSlips };
//# sourceMappingURL=user.service.js.map