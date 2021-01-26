import { Router } from "express";
import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";
import PermissionController from "./controllers/PermissionController";
import RoleController from "./controllers/RoleController";
import ProductController from "./controllers/EmployeeController";

import { is } from "./middlewares/permission";

const router = Router();

router.post("/users", UserController.create);
router.post("/sessions", SessionController.create);
router.post("/permissions", PermissionController.create);
router.post("/roles", RoleController.create);

router.post("/employees", is(["ROLE_ADMIN"]), EmployeeController.create);
router.get(
  "/employees",
  is(["ROLE_ADMIN", "ROLE_USER"]),
  EmployeeController.index
);
router.get(
  "/employees/:id",
  is(["ROLE_ADMIN", "ROLE_USER"]),
  EmployeeController.show
);

export { router };
