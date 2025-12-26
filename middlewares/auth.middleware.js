const jwt = require("jsonwebtoken");

module.exports = (secret) => (req, res, next) => {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;

  if (!token) return res.status(401).json({ message: "No token" });

  try {
    req.user = jwt.verify(token, secret);
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
