import { MessageHandler } from "../../utility/response-handler"

export const userConstants = {
    NOT_FOUND: new MessageHandler(404, 'user not found!'),
    USER_ADDED: new MessageHandler(201, 'user added!'),
    USER_UPDATED: new MessageHandler(200, 'user updated!'),
    PASSWORD_CHANGED: new MessageHandler(200, 'password changed!'),
    USER_DELETED: new MessageHandler(200, 'user deleted!'),
    UNIQUE_EMAIL: new MessageHandler(406, 'email should be unique!'),
    FAILED: new MessageHandler(500, "Internal Error!!!"),
    INVALID_DETAILS: new MessageHandler(401, "Invalid User Details!!!"),
    SLIP_GENERATED: new MessageHandler(201,"Slip Generated Sucessfully!!!"),
    NO_PENDING_SLIPS: new MessageHandler(200,"There are no Pending Slips!!!"),
    SLIP_ACCEPTED : new MessageHandler(200,"Slip Status Updated!!!"),
}