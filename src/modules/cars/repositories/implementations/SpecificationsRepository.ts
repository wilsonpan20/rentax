import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../database';
import { Specification } from '../../entities/Specification.entity';
import { ICreateSpecificationDTO, ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
   private repository: Repository<Specification>

   constructor() {
    this.repository = AppDataSource.getRepository(Specification)
  }
  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name
    })

    await this.repository.save(specification)

  }

  async findByName(name: string): Promise< Specification | undefined | null> {
     const specification = await this.repository.findOne({
      where: { name }
    });

   return specification


  }
}

export { SpecificationsRepository };
