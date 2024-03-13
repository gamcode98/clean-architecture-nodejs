/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from 'express'
import { AuthRepository, CustomError, SignupUser, SignupUserDto } from '../../domain'
import { UserModel } from '../../data/mongodb'

export class AuthController {
  constructor (
    private readonly authRepository: AuthRepository
  ) {}

  private readonly handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error })
    }

    console.error(error)

    return res.status(500).json({ error: 'Internal Server Error' })
  }

  signupUser = (req: Request, res: Response) => {
    const { body } = req

    const [error, signupUserDto] = SignupUserDto.create(body)

    if (error) return res.status(400).json({ error })

    new SignupUser(this.authRepository)
      .execute(signupUserDto!)
      .then(({ user, token }) => {
        res.json({ user, token })
      })
      .catch(error => this.handleError(error, res))
  }

  loginUser = (req: Request, res: Response) => {
    res.json({ ok: true })
  }

  getUsers = (req: Request, res: Response) => {
    UserModel.find({})
      .then(users => res.json(users))
      .catch(error => this.handleError(error, res))
  }
}
