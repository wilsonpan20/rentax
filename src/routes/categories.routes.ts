import { Router } from 'express';
import multer from 'multer';
import 'reflect-metadata';
import uploadConfig from '../config/upload';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';

const categoriesRoutes = Router();
const uploadFile = multer(uploadConfig.upload('./tmp/file'));

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post('/import', uploadFile.single('file'), importCategoryController.handle);

export { categoriesRoutes };
