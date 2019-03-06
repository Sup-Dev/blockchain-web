module.exports = async function createblock (req, res) {
  var BlockChain = require('../services/blockchain');
  var Block = require('../services/block');
  var currentBlockchain = new BlockChain.Blockchain();

  var body = req.param('body');

  if(body) {
    console.log("In body");
    let newBlock = new Block.Block(body);

    currentBlockchain.addBlock(newBlock).then((result) => {
      console.log(result);
      return res.send(result);
    }).catch((err) => {
      console.log(err);
      return res.json(404, {"error": err});
    });
  }

  // return res.json({"state": "nope!"});
}
