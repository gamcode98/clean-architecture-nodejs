export class CustomError extends Error {
  constructor (
    public readonly statusCode: number,
    public readonly message: string
  ) {
    super(message)
  }

  static badRequest (message: string = 'Bad Request') {
    return new CustomError(400, message)
  }

  static notFound (message: string = 'Not Found') {
    return new CustomError(404, message)
  }

  static internalServerError (message: string = 'Internal Server Error') {
    return new CustomError(500, message)
  }

  static unauthorized (message: string = 'Unauthorized') {
    return new CustomError(401, message)
  }

  static forbidden (message: string = 'Forbidden') {
    return new CustomError(403, message)
  }

  static conflict (message: string = 'Conflict') {
    return new CustomError(409, message)
  }

  static preconditionFailed (message: string = 'Precondition Failed') {
    return new CustomError(412, message)
  }

  static notAcceptable (message: string = 'Not Acceptable') {
    return new CustomError(406, message)
  }

  static notImplemented (message: string = 'Not Implemented') {
    return new CustomError(501, message)
  }

  static serviceUnavailable (message: string = 'Service Unavailable') {
    return new CustomError(503, message)
  }
}
