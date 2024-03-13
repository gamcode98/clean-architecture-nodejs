import { CustomError, UserEntity } from '../../domain'

export class UserMapper {
  static userEntityFromObject (object: { [key: string]: any }) {
    const { _id, name, email, password, roles, img } = object

    if (!_id) throw CustomError.notFound()
    if (!name) throw CustomError.notFound('Name is required')
    if (!email) throw CustomError.notFound('Email is required')
    if (!password) throw CustomError.notFound('Password is required')
    if (!roles) throw CustomError.notFound('Roles are required')
    if (!img) throw CustomError.notFound('Image is required')

    return new UserEntity(
      _id,
      name,
      email,
      password,
      roles,
      img
    )
  }
}
