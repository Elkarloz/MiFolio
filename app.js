const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const path = require("path")

const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use("/api/productos/", require("./routes/Product"));

// Middleware para Vue.js router modo history
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

app.set("puerto", process.env.PORT || 4000);
app.listen(app.get("puerto"), () => {
  console.log("Example app listening on port " + app.get("puerto"));
});
