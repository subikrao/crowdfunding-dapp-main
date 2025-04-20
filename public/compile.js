const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractPath = path.resolve(__dirname, 'contract', 'Crowdfunding.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
      'Crowdfunding.sol': {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "istanbul"
    },
  };

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const contract = output.contracts['Crowdfunding.sol'].Crowdfunding;

module.exports = contract;