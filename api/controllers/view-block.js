// var Blockchain = require('../services/blockchain');

module.exports = {


  friendlyName: 'View block',


  description: 'Display "Block" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/block'
    }

  },


  fn: async function () {
    var BlockChain = require('../services/blockchain');

    var blockTest = new BlockChain.Blockchain();
    blockTest.test();
    // Respond with view.
    return {};

  }


};
