const ClientError = require('./ClientError');

const handlerError = (error, h) => {
  // server ERROR!
  let status = 'error';
  let message = 'Maaf, terjadi kegagalan pada server kami.';
  let responseCode = 500;

  // client ERROR!
  if (error instanceof ClientError) {
    status = 'fail';
    message = error.message;
    responseCode = error.statusCode;
  }

  const response = h.response({
    status,
    message,
  });
  console.error(error);
  response.code(responseCode);
  return response;
};

module.exports = { handlerError };
