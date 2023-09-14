import { Specification } from '../entities/Specification.entity';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string):Promise< Specification | undefined | null>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
