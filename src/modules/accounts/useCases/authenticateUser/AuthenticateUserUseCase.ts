import { compare } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequet {
  email: string;
  password: string;
}
interface IReponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute({ email, password }: IRequet): Promise<IReponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Email or password incorrect!');
    }
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email or passoword incorrect!');
    }
    const token = sign({}, '4aa606997465fd6fc4e825ff8695fcdf', {
      subject: user.id,
      expiresIn: '1d',
    });
    const tokenReturn: IReponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };
    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
