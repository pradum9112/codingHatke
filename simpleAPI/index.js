//for making empty project npm init -y

// const app = require("express")();

// const port = 3333;

// app.listen(port, () => console.log(`sever runing on ${port}`));

// app.get("/fruits", (req, res) => {
//   res.send("Mongo🥭 and Banana 🍌")
// });

const app = require("express")();
const port = 9090;
const srvr = `sever runing on ${port}`;
console.log(srvr);
app.get("/fruits", (req, res) => {
  res.send("Mongo🥭 and Banana🍌");
});
