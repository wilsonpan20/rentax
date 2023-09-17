import { Router } from 'express';
import 'reflect-metadata';
import { CreateUserController } from '../modules/accounts/useCases/CreateUserController';

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post('/', createUserController.handle);

export { userRoutes };
