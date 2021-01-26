import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import EmployeeRepository from "../repositories/EmployeeRepository";

class PermissionController {
  async create(request: Request, response: Response) {
    const employeeRepository = getCustomRepository(EmployeeRepository);

    const { name, description } = request.body;

    const existsProduct = await employeeRepository.findOne({ name });

    if (existsProduct) {
      return response.status(400).json({ err: "Product already exists!" });
    }

    const product = employeeRepository.create({
      name,
      description,
    });

    await employeeRepository.save(product);

    return response.json(product);
  }

  async index(request: Request, response: Response) {
    const employeeRepository = getCustomRepository(EmployeeRepository);

    const products = await employeeRepository.find();

    return response.json(products);
  }

  async show(request: Request, response: Response) {
    const employeeRepository = getCustomRepository(EmployeeRepository);

    const { id } = request.params;

    const product = await employeeRepository.findOne(id);

    return response.json(product);
  }
}

export default new PermissionController();
