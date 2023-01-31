import db from "../config/dbConfig.js";

function connectDatabase() {
  db.sync();

  db.authenticate()
    .then(() => console.log("Database connected."))
    .catch((err) => console.log("Error: " + err));
}

export default connectDatabase;
