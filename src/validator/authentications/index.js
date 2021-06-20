/* eslint-disable no-underscore-dangle */
const {
  PostAuthenticationPayloadSchema,
  PutAuthenticationPayloadSchema,
  DeleteAuthenticationPayloadSchema,
} = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const _checkValidation = (payloadSchema, payload) => {
  const validationResult = payloadSchema.validate(payload);
  if (validationResult.error) {
    throw new InvariantError(validationResult.error.message);
  }
};

const AuthenticationsValidator = {
  validatePostAuthenticationPayload: (payload) => {
    _checkValidation(PostAuthenticationPayloadSchema, payload);
  },
  validatePutAuthenticationPayload: (payload) => {
    _checkValidation(PutAuthenticationPayloadSchema, payload);
  },
  validateDeleteAuthenticationPayload: (payload) => {
    _checkValidation(DeleteAuthenticationPayloadSchema, payload);
  },
};

module.exports = AuthenticationsValidator;
