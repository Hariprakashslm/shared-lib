const createLogger = (serviceName) => ({
  info: (message, meta = {}) =>
    console.log(
      JSON.stringify({
        level: "INFO",
        service: serviceName,
        message,
        ...meta,
        timestamp: new Date().toISOString(),
      })
    ),

  error: (message, meta = {}) =>
    console.error(
      JSON.stringify({
        level: "ERROR",
        service: serviceName,
        message,
        ...meta,
        timestamp: new Date().toISOString(),
      })
    ),
});

module.exports = { createLogger };
