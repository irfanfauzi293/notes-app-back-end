const { handlerError } = require('../../exceptions/HandlerError');

class UploadsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postUploadImageHandler = this.postUploadImageHandler.bind(this);
  }

  async postUploadImageHandler(request, h) {
    try {
      const { data } = request.payload;
      this._validator.validateImageHeaders(data.hapi.headers);

      const fileLocation = await this._service.writeFile(data, data.hapi);

      const response = h.response({
        status: 'success',
        data: {
          fileLocation,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      const response = handlerError(error, h);
      return response;
    }
  }
}

module.exports = UploadsHandler;
