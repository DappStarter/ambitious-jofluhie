require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile pull hunt cricket bubble space'; 
let testAccounts = [
"0x772e8b8b8b96cec476c1aecc609edd3e7bd3a47cc17dacc4c8072ccf124402ba",
"0xe310087a28807339e0ad04a1587ba54c905db01daeaf15a60838e6a71d076e5f",
"0xcf7905d5ac6edee0d474958250bd1ba513510c0a259b36753d7e89bd28b88cfa",
"0x9532c171e2d7aeb7fba33a61a00fb36eae311e31d4b9c8654c1e82ec6ce04b9a",
"0x136973c5be47ded0ee616652b9e26baa2625e2f205a974327a686e19bf528678",
"0x3b5f2f096f466fd0ad79ab1ce3d65b04cd294ca256c5c9d56738e6979af5d389",
"0x1ae31ed43e955a546b31983bac715acad0c8218a8a4ecbcfe30c3e7c4cfa1e1f",
"0x3b0e2b63d603f3d272da8fa4072e7883603a50f94530ff009bdfc644f2523921",
"0x1b5b40ec5ed29a8b08c68f1f4553cebd016700831987a70673d92f533fa964eb",
"0x75b51b479f6cd50fe17ee6d9c1c79ac0020017a0a0d94092854405fbf2a941ac"
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
