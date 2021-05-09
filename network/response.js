exports.success = (req, res, message, status) => {
  res.status(status).send({
    error: '',
    body: message,
  });
};

exports.error = (req, res, message, status, details) => {
  console.log('[Response error ]' + details);
  res.status(status).send({
    error: message,
    body: '',
  });
};
