const testController = (req, res) => {
  res.status(200).send({
    Message: "test Ho gya",
    Success: true,
  });
};

module.exports = { testController };
