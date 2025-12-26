module.exports = {
  auth: require("./auth.middleware"),
  validate: require("./validate.middleware"),
  correlation: require("./correlation.middleware"),
  errorHandler: require("./error.middleware"),
  logging: require("./logging.middleware"),
};
