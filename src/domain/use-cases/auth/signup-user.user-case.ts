import { JwtAdapter } from '../../../config'
import { SignupUserDto } from '../../dtos/auth'
import { CustomError } from '../../errors/custom.errors'
import { AuthRepository } from '../../repositories/auth.repository'

interface UserToken {
  token: string
  user: {
    id: string
    name: string
    email: string
  }
}

type SignToken = (payload: Object, duration?: string) => Promise<string | null>

interface SignupUserUseCase {
  execute: (signupUserDto: SignupUserDto) => Promise<UserToken>
}

export class SignupUser implements SignupUserUseCase {
  constructor (
    private readonly authRepository: AuthRepository,
    private readonly signToken: SignToken = JwtAdapter.generateToken
  ) {}

  async execute (signupUserDto: SignupUserDto): Promise<UserToken> {
    const user = await this.authRepository.signup(signupUserDto)

    const token = await this.signToken({ id: user.id }, '2h')

    if (!token) throw CustomError.internalServerError('Failed to generate token')

    return { user, token }
  }
}
