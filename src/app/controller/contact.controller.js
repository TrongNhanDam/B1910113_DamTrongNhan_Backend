const create = (req, res) => {
  res.json({ message: "create handler" });
};
const findAll = (req, res) => {
  res.json({ message: "findAll handler" });
};
const findOne = (req, res) => {
  res.json({ message: "findOne handler" });
};
const update = (req, res) => {
  res.json({ message: "update handler" });
};
const deleteOne = (req, res) => {
  res.json({ message: "deleteOne handler" });
};
const deleteAll = (req, res) => {
  res.json({ message: "deleteAll handler" });
};
const findAllFavorite = (req, res) => {
  res.json({ message: "findAllFavorite handler" });
};
module.exports = {
  create,
  findAll,
  findOne,
  update,
  deleteOne,
  deleteAll,
  findAllFavorite,
};
