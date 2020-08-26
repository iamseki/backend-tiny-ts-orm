import 'reflect-metadata';
import './database';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import AppError from './errors/AppError';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    process.stdout.write(`[Error - StatusCode: ${err.statusCode}] - Message: ${err.message}\n`);
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  process.stdout.write(`[Error - Name: ${err.name}] - Message: ${err.message}\n`);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(PORT, () => process.stdout.write(`🚀 Server started on port ${PORT}!\n`));

// export default app;
