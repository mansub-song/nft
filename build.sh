#!/bin/bash

if [ $1 == "first" ]; then
	npm install dotenv

	npm install @openzeppelin/contracts

	npx hardhat compile

	npm install @alch/alchemy-web3

# nft smart-contrat deploy 
	npx hardhat run scripts/nft-deploy.js --network rinkeby
else
	 npx hardhat run scripts/nft-deploy.js --network rinkeby
fi
