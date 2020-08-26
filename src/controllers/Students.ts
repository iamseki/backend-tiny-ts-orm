import { Request, Response } from 'express';
import SomeBusinessLogicService from '../services/SomeBusinessLogic';

class StudentsController {
  public async read(request: Request, response: Response): Promise<Response> {
    // const { params, body, query } = request
    // invoke some service
    // throw some error to be catched by Error Middleware
    // throw new AppError('deu erro esse é o status', 403);

    const businessLogicService = new SomeBusinessLogicService();

    const students = await businessLogicService.execute();
    const statusCode = students.length === 0 ? 204 : 200;

    return response.status(statusCode).json(students);
  }
}
// singleton pattern
export default new StudentsController();
