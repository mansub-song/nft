#!/bin/bash


npx hardhat run scripts/nft-deploy.js --network rinkeby

node scripts/mint-nft.js
