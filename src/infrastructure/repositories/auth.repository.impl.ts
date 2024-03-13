import { AuthDatasource, AuthRepository, SignupUserDto, UserEntity } from '../../domain'

export class AuthRepositoryImpl implements AuthRepository {
  constructor (
    private readonly authDatasource: AuthDatasource
  ) {}

  async signup (signupUserDto: SignupUserDto): Promise<UserEntity> {
    return await this.authDatasource.signup(signupUserDto)
  }
}
