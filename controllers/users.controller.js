const {request, response} = require('express')

const getUser = (req = request, res = response) => {
  const {q, limit, apikey, name = 'no name'} = req.query;
  res.status(200).json({
    msg: "API GET",
    q,
    limit,
    apikey,
    name
  });
}

const postUser = (req = request, res = response) => {
  const body = req.body;
  res.status(201).json({
    msg: "API POST",
    body
  });
}

const putUser = (req = request, res = response) => {
  const id = req.params.id;
  res.status(500).json({
    msg: "API PUT",
    id
  });
}

const patchUser = (req = request, res = response) => {
  res.status(200).json({
    msg: "API PATCH",
  });
}

const deleteUser = (req = request, res = response) => {
  res.status(200).json({
    msg: "API DELETE",
  });
}

module.exports = {
    getUser,
    postUser,
    putUser,
    patchUser,
    deleteUser
}