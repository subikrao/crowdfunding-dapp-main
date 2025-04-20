const Web3 = require('web3').Web3;
const { abi, evm } = require('./compile');

const web3 = new Web3('http://127.0.0.1:8545'); // Connect to local Ganache instance

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Deploying from account:', accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ from: accounts[0], gas: '1000000', gasPrice: '20000000000' }); // Specify gas price

  console.log('Contract deployed to:', result.options.address);
};

deploy();