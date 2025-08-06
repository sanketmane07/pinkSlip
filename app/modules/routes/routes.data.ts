

import { IExcludedPaths } from "../../utility/authorize";
import { authRouter } from "../auth/auth.routes";
import { userRouter } from "../user/user.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [
  new Route('/auth',authRouter),
  new Route('/user',userRouter)
];

export const excludedPaths: IExcludedPaths[] = [
  { path: '/auth', method: "POST" },
  { path: '/auth/change-password/', method: "PUT" },
]
