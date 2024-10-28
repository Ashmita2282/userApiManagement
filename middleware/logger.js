const logger = (req, res, next) => {
  try {
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    console.log(`Status: ${res.statusCode}`);
    next();
  } catch (err) {
    console.error("Error in logger middleware:", err);
    res.status(500).json({
      success: false,
      message: "Error in request logging",
      error: err.message,
    });
  }
};

export default logger;
