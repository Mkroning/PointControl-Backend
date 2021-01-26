import { Repository, EntityRepository } from "typeorm"
import Employee from "../models/Employee";

@EntityRepository(Employee)
class EmployeeRepository extends Repository<Employee> {}

export default EmployeeRepository
