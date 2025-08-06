"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
const userDetailsSchema = new base_schema_1.BaseSchema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    requests: {
        type: [{
                department: {
                    type: String,
                },
                date: {
                    type: Date,
                    default: () => Date.now() + 7 * 24 * 60 * 60 * 1000
                },
                submitted_by: {
                    type: String
                },
                activity_details: {
                    type: String
                },
                description: {
                    type: String
                },
                slip_status: {
                    type: String,
                    enum: ['accepted', 'rejected', 'pending'],
                    default: 'pending'
                }
            }],
    }
});
exports.userModel = (0, mongoose_1.model)("userDetails", userDetailsSchema);
//# sourceMappingURL=user.schema.js.map