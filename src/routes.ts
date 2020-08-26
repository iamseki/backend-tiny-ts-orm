import { Router } from 'express';
import AppError from 'errors/AppError';
import StudentController from './controllers/Students';

const routes = Router();
const studentsRouter = Router();

studentsRouter.get('/', StudentController.read);

routes.use('/students', studentsRouter);

routes.use('*', () => {
  throw new AppError(`Route doesn't exist`, 404);
});

export default routes;
