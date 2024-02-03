const express = require("express");

const app = express();
const port = process.argv[3] || 3000;

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
  console.log(`Listening on https://node.mekayastudio.my.id:${port}`);
});
