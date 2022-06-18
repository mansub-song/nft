require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",

  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/ea291b5f25d44ff9bdfb6cad001036ff",
      accounts: ["bd0809435507c37658981fb2eff9ad0f75eb0470bf8a2b5d57d547c4da78e9f4"], //address: 0x8101f434c40bBbb8BF209894400e1B52193B9435
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/ea291b5f25d44ff9bdfb6cad001036ff",
      accounts: ["bd0809435507c37658981fb2eff9ad0f75eb0470bf8a2b5d57d547c4da78e9f4"], //address: 0x8101f434c40bBbb8BF209894400e1B52193B9435
    },
  },
  etherscan: {
    apiKey: "T9PNGUZCTARQNP2S5ER2C8YVK5B5VYXXCA",
  },
};
