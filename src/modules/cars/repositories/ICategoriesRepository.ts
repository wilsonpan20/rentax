import { Category } from "../entities/Category.entity";

interface ICreateCategoryDTO{
  name: string;
  description: string;
}

interface ICategoriesRepository{
  findByName(name: string): Promise<Category | undefined | null>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO):void
}

export {ICategoriesRepository,ICreateCategoryDTO}
