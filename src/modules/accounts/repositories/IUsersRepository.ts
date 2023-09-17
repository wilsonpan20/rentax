import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User.entity';

interface IRequet {
  email: string;
}

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User | undefined | null>;
  findById(id: string): Promise<User | undefined | null>;
}

export { IUsersRepository };
