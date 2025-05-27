const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  try {
    const dir = path.join(__dirname, "../../produits");
    const fichiers = fs.readdirSync(dir).filter(file => file.endsWith(".md"));
    return {
      statusCode: 200,
      body: JSON.stringify(fichiers)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Impossible de lire les produits" })
    };
  }
};
