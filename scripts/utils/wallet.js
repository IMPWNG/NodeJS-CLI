const ethers = require('ethers');

const mnemonic = 'margin island fragile stay agent poem burst sample model coral couple repair';
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
console.log(`Address: ${wallet.address}`);

module.exports = wallet; 