const loggingMiddleware = (request, response, next) => {
  console.log(`Запрос на: ${request.originalUrl}`);
  next();
};

module.exports = loggingMiddleware;
