module.exports = (label) => (err, req, res, next) => {
  if (label) {
    logger.error(label, {
      traceId: req.traceId,
      message: err.message,
    });
  }

  res.status(503).json({
    success: false,
    message: "Service temporarily unavailable",
    traceId: req.traceId,
  });
};
