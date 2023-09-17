import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

@injectable()
class CreateUserUserCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      email,
      password,
      driver_license,
    });
  }
}

export { CreateUserUserCase };
