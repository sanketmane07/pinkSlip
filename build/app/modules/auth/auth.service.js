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
const password_1 = require("../../utility/password");
const user_service_1 = __importDefault(require("../user/user.service"));
const login = (userDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield user_service_1.default.login(userDetails);
        return response;
    }
    catch (error) {
        throw error;
    }
});
const createUser = (userDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        userDetails.password = (0, password_1.createHash)(userDetails.password);
        const response = yield user_service_1.default.createUser(userDetails);
        return response;
    }
    catch (error) {
        throw error;
    }
});
// const deleteAccount = async (id: string) => {
//     try {
//         const response = await userService.deleteUser(id);
//         return response
//     } catch (error) {
//         throw error
//     }
// }
// const login = async (loginDetails: ILogin, cookies: any) => {
//     try {
//         const response = await userService.login(loginDetails, cookies);
//         return response;
//     } catch (error) {
//         throw error;
//     }
// }
// const forgotPassword = async (email: object) => {
//     try {
//         const userDetails: any = await userService.getUserByMail(email);
//         console.log(userDetails.id)
//         const token = createToken({ id: userDetails.id }, process.env.JWT_SECRET || "", '1d');
//         const { URL } = process.env;
//         const link = `${URL}/${token}`;
//         await sendEmail(userDetails.email, "FORGOT PASSWORD", `
//             Hi, ${userDetails.name},
//             Your password reset link is here ${link}
//         `)
//         return authConstants.PASSWORD_LINK;
//     } catch (error) {
//         throw error;
//     }
// }
// const resetPassword = async (userId: string, newPassword: string) => {
//     try {
//         newPassword = await createHash(newPassword);
//         const response = await userService.updatePassword(userId, newPassword);
//         return response;
//     } catch (error) {
//         throw error;
//     }
// }
// export default { createUser, deleteAccount, login, forgotPassword, resetPassword }
exports.default = { createUser, login };
//# sourceMappingURL=auth.service.js.map