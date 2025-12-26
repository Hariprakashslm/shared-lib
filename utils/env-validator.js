const Joi = require("joi");

module.exports = (schema, env = process.env) => {
  const { error, value } = schema.validate(env, {
    allowUnknown: true,
  });

  if (error) {
    throw new Error(`Env validation error: ${error.message}`);
  }

  return value;
};
