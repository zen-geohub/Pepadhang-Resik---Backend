const pool = require('../../db')
const queries = require('./queries')

const getPoint = (req, res) => {
  pool.query(queries.getPoint, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const getSimpang = (req, res) => {
  pool.query(queries.getSimpang, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const getClearArea = (req, res) => {
  pool.query(queries.getClearArea, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const getZonaKhusus = (req, res) => {
  pool.query(queries.getZonaKhusus, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const test = (req, res) => {
  res.send({title: 'hehe'})
}

module.exports = {
  getPoint,
  getSimpang,
  getClearArea,
  getZonaKhusus,
  test
}