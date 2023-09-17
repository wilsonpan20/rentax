import { Router } from 'express';
import { specificationsRoutes } from './specifications.routes';
import { categoriesRoutes } from './categories.routes';
import { userRoutes } from './Users.routes';
import { authenticateRoutes } from './authenticate.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', userRoutes);
router.use(authenticateRoutes);

export { router };
