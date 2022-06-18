// console.log("hi");
require("dotenv").config();
const API_URL = process.env.API_URL;
const ADDRESS = process.env.ADDRESS;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/NFTExample.sol/NFTExample.json");

const contractAddress = "0x8d8CBFcbF9Ca234382552fD6816e570FAdbB4Ae9";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT(tokenURI) {
	const nonce = await web3.eth.getTransactionCount(ADDRESS, "latest"); //get latest nonce

	//the transaction[]
	const tx = {
		from: ADDRESS,
		to: contractAddress,
		nonce: nonce,
		gas: 500000,
		data: nftContract.methods.mintNFT(ADDRESS, tokenURI).encodeABI(),
	};

	const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
	signPromise
		.then((signedTx) => {
			web3.eth.sendSignedTransaction(signedTx.rawTransaction, function (err, hash) {
				if (!err) {
					console.log(
						"The hash of your transaction is: ",
						hash,
						"\nCheck Alchemy's Mempool to view the status of your transaction!"
					);
				} else {
					console.log("Something went wrong when submitting your transaction:", err);
				}
			});
		})
		.catch((err) => {
			console.log(" Promise failed:", err);
		});
}

mintNFT("ipfs://QmYueiuRNmL4MiA2GwtVMm6ZagknXnSpQnB3z2gWbz36hP");
