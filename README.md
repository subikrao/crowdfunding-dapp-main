<<<<<<< HEAD
# ChainFund

ChainFund is a decentralized blockchain crowdfunding platform that enables transparent, secure, and efficient fundraising through Ethereum smart contracts.

![ChainFund Logo](https://images.youngplatform.com/coins/eth_light_3.png)

## Overview

ChainFund leverages blockchain technology to create a trustless environment where project creators can raise funds directly from supporters without intermediaries. The platform ensures transparency, reduces fees, and provides immutable records of all transactions.

What makes ChainFund unique is its built-in approval system, where designated approvers must verify projects before they become active, adding an extra layer of security and trust.

## Features

- **Multi-approver Governance**: Projects require validation from multiple approvers before becoming active
- **Full Project Lifecycle Management**: Create, fund, complete, and withdraw funds
- **Refund Protection**: Contributors can get refunds if projects don't reach their goals
- **Transparent Fund Tracking**: Real-time progress tracking for all campaigns 
- **Integrated Currency Converter**: Easy conversion between Wei, ETH, USD, and INR
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Owner Administration Tools**: Platform owners can manage approvers and required approval thresholds

## Smart Contract Architecture

The Crowdfunding.sol contract implements several key functions:

- Project creation and management
- Multi-approver governance system
- Fund contribution handling
- Project completion and fund withdrawal
- Refund mechanisms for incomplete projects
- Administrative controls for platform governance

### Key Contract Functions

| Function | Description |
|----------|-------------|
| `createProject` | Create a new crowdfunding project |
| `approveProject` | Approve a project (approvers only) |
| `contribute` | Send ETH to support a project |
| `withdrawFunds` | Project owner can withdraw funds after completion |
| `refund` | Get your contribution back if a project fails |
| `addApprover` | Add a new approver (owner only) |
| `removeApprover` | Remove an approver (owner only) |
| `setRequiredApprovals` | Change the number of required approvals (owner only) |

## Getting Started

### Prerequisites

- MetaMask or compatible Web3 wallet
- Ethereum testnet or mainnet access
- Basic knowledge of blockchain transactions
- Node.js and npm installed

### Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/subikrao/crowdfunding-dapp-main
   cd crowdfunding-dapp-main
   ```

2. Install dependencies and start the server:
   ```
   npm init -y
   npm install express
   node server.js
   ```

3. Access the application:
   ```
   http://localhost:3000/
   ```

4. Deploy the smart contract:
   - Use Remix, Truffle, or Hardhat to deploy `Crowdfunding.sol` to your chosen network
   - Note the deployed contract address
   - Update the contract address in your configuration

5. Connect your wallet when prompted and start using ChainFund!

## User Guide

### Creating a Project

1. Navigate to the "Create Project" section
2. Fill out the project details:
   - Title and description
   - Funding goal (in wei)
   - Duration in days
3. Click "Launch Project"
4. Wait for approver verification

### Supporting a Project

1. Browse active projects
2. Click on a project to view details
3. Enter your contribution amount
4. Click "Contribute Now"
5. Confirm the transaction in your wallet

### Managing Your Projects

1. Click the "My Projects" tab to view your created projects
2. Monitor funding progress
3. Withdraw funds when your project is successful
4. Request refunds for failed projects

### Admin Functions (Platform Owner Only)

1. Add or remove approvers
2. Set the required number of approvals
3. View the list of current approvers

## Technology Stack

- **Smart Contract**: Solidity 0.8.x
- **Frontend**: HTML, CSS, JavaScript
- **Web3 Connection**: Web3.js
- **UI Framework**: Bootstrap 5
- **Icons**: Font Awesome
- **Backend**: Node.js with Express

=======
# crowdfunding-dapp

to start use node server.js
>>>>>>> dcb64d998c8a829cee64aa596d613bf11f063766
