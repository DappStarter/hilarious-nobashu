require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile punch hunt basic fresh spare'; 
let testAccounts = [
"0x4eda25d7faa174ebe0d7c8b29a3aa39e4c779bd2090dbcf640ba713c5023e386",
"0x626e093ff5f450579139862e37225302e328adf279a5033d75cfb2789741aa6f",
"0xd739a06674eef74316c8cea7c5fe2397d5e496f3908572415d31a010c9280fa3",
"0x7892b0871a5b015ced4d930802323ffb6c8fb047a65da174d8eeb774acf033c4",
"0xae30e480ed981ab38de0dcf06521ec7ca5d08d493105b77605939b8d92af0c2d",
"0xa4ee6931f67adf92e959b996a5926275a90acdec4d457852743ab9d3589a6594",
"0x7d3e7185540e8c5c827a924875691e85ebcde49fcb9672f9613f608087dc73ad",
"0xa9e5cd8e8e3c025811c0be50db94930f95dd786a1f904a28b3d148d6a7fb8052",
"0x9ce87038d7e62c3fbd155a15e1d711ff226e471e64c723d61a178e91102db5ed",
"0xa645ad1ba02d2c71606d8ae73cb90cc4f29400c6c57ce11cb6fd899e5b40f144"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
