import { MissingParamError } from '../erros/missing-param-error'
import { BadRequest } from '../helpers/http-helper'
import { type HttpRequest, type HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return BadRequest(new MissingParamError('name'))
    }

    if (!httpRequest.body.email) {
      return BadRequest(new MissingParamError('email'))
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}
