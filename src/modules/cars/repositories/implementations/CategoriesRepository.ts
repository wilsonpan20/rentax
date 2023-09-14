import { Category } from '../../entities/Category.entity';
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';
import { AppDataSource } from '../../../../database';
import { Repository} from 'typeorm';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>

   constructor() {
    this.repository = AppDataSource.getRepository(Category)
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name
    })

    await this.repository.save(category)

  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories

  }

  async findByName(name: string): Promise<Category | undefined | null> {
    const category = await this.repository.findOne({
      where: { name }
    });

   return category

  }
}

export { CategoriesRepository };
