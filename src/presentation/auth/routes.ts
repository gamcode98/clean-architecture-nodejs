import { Router } from 'express'
import { AuthController } from './controller'
import { AuthDatasourceImpl, AuthRepositoryImpl } from '../../infrastructure'
import { AuthMiddleware } from '../middlewares/auth.middleware'

export class AuthRoutes {
  static get routes (): Router {
    const router = Router()
    const datasource = new AuthDatasourceImpl()
    const authRepository = new AuthRepositoryImpl(datasource)
    const controller = new AuthController(authRepository)

    router.use('/login', controller.loginUser)
    router.use('/signup', controller.signupUser)

    router.get('/', AuthMiddleware.validateJWT, controller.getUsers)

    return router
  }
}
