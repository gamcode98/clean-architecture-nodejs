import { SignupUserDto } from '../dtos/auth'
import { UserEntity } from '../entities'

export abstract class AuthDatasource {
  abstract signup (signupUserDto: SignupUserDto): Promise<UserEntity>
}
