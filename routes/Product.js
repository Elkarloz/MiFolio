const express = require("express");
const router = express.Router();
const conexion = require("../db/db"); // importando el modelo

router.get("/", async function (req, res) {
  conexion.query("SELECT * FROM tbla1", (err, result) => {
    try {
      res.json(result);
    } catch (error) {
      res.status(500).json({
        message: "Ocurrio un error",
      });
    }
  });
});

module.exports = router; // exportando las rutas
