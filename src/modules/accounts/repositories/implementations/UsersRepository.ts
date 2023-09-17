import { Repository } from 'typeorm';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';
import { User } from '../../entities/User.entity';
import { AppDataSource } from '../../../../database';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({ name, email, driver_license, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
    });
    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User | undefined | null> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });
    return user;
  }
}

export { UsersRepository };
