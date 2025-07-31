import { Router } from "express";
import { getAllEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployeeById } from "../controller/employees.controller.js"
const router = Router();

router.get('/', getAllEmployees);
router.get('/:id', getEmployeeById);
router.post('/', createEmployee);
router.patch('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);


export default router;