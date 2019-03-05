module.exports = async function block (req, res) {

    var id = req.param('id');
    var data;
    var BlockChain = require('../services/blockchain');

    var currentBlockchain = new BlockChain.Blockchain();

    currentBlockchain.getBlock(id).then((result) => {
      console.log(result);
      data = result;
      return res.json(result);
    });

}
