module.exports = async function block (req, res) {
    var BlockChain = require('../services/blockchain');

    var id = req.param('id');
    var currentBlockchain = new BlockChain.Blockchain();

    currentBlockchain.getBlock(id).then((result) => {
      console.log(result);
      return res.json(result);
    }).catch((err) => {
      console.log(err);
      return res.json(404, {"error": err});
    });

}
