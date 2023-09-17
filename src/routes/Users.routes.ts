import { Router } from 'express';
import 'reflect-metadata';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post('/', createUserController.handle);

export { userRoutes };
