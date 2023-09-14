import { Category } from "../../entities/Category.entity";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";



class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { };

async  execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list()
    console.log('caiu aki', categories)

    return categories;
  }

}

  export { ListCategoriesUseCase };
