'use strict'

const express = require('express')
const tarjetasCtrl = require('../controllers/tarjetas')
const api = express.Router()

api.get('/service/consultarTarjetas', tarjetasCtrl.getTarjeta)

module.exports = api
