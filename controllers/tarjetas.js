'use strict'

// ---------------------------------------------------------------
// Consultar información de una única tarjeta
// ---------------------------------------------------------------
function getTarjeta (req, res) {
    const ObjID = req.query.ObjID

    // Leer BD (.json)
    var files = require("fs")
    var contTarjetas = files.readFileSync("./DB/tarjetas.json")
    var jsonContTar = JSON.parse(contTarjetas)
    var resTarjeta = []

    jsonContTar.tarjetas.filter(function (elemt, key){
      if (elemt.ObjID == ObjID) {
        resTarjeta.push(elemt)
        return
      }
    })

    if (resTarjeta.length > 0)
      res.status(200).send(resTarjeta)
    else
      res.status(200).send("Sin resultados. Tarjeta defectuosa o invalida")
}

module.exports = {
    getTarjeta
}
