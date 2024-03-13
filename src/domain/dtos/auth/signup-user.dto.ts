import { Validators } from '../../../config'

export class SignupUserDto {
  private constructor (
    public readonly name: string,
    public readonly email: string,
    public readonly password: string
  ) {}

  static create (object: { [key: string]: any }): [string?, SignupUserDto?] {
    const { name, email, password } = object

    if (!name) return ['name is required']
    if (!email) return ['email is required']
    if (!Validators.email.test(email)) return ['email is invalid']
    if (!password) return ['password is reqired']
    if (password.length < 6) return ['password must be at least 6 characters long']
    if (password.length > 64) return ['password must not be longer than 64 characters']

    return [
      undefined,
      new SignupUserDto(name, email, password)
    ]
  }
}
