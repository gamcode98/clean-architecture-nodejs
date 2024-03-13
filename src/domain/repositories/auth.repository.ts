import { SignupUserDto } from '../dtos/auth'
import { UserEntity } from '../entities'

export abstract class AuthRepository {
  abstract signup (signupUserDto: SignupUserDto): Promise<UserEntity>
}
