const db = require('../dbConfig.js')

module.exports = {
  get,
  getById,
  insert,
}

function get() {
  return db('cars')
}

function getById(queryId) {
  return db('cars')
    .where({ id: queryId })
}

function insert(queryBody) {
  return db('cars')
    .insert(queryBody)
}