const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "02620dc9ce3186af09b36fc0742a570befb37ab3511aacca1c30eed8237fab92b3": 100, // Alice
  "030560fef8bb2abba892dd8d101a395cb83e2601e2118210183af87fd59d092cb7": 50, // Bob
  "02817e255bd49a1fbc6dab4d4149137425f0be74c5adc8e82931135fd1ee1f889a": 75, // Charlie
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
