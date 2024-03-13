import jwt from 'jsonwebtoken'
import { envs } from './envs'

export class JwtAdapter {
  static async generateToken (
    payload: Object,
    duration: string = '2h'
  ): Promise<string | null> {
    return await new Promise(resolve => {
      jwt.sign(payload, envs.JWT_SECRET, { expiresIn: duration }, (error, token) => {
        if (error) return resolve(null)
        resolve(token as string)
      })
    })
  }

  static async verifyToken<T>(token: string): Promise<T | null> {
    return await new Promise(resolve => {
      jwt.verify(token, envs.JWT_SECRET, (error, decoded) => {
        if (error) return resolve(null)
        resolve(decoded as T)
      })
    })
  }
}
