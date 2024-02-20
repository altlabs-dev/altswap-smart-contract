import { config as dotEnvConfig } from 'dotenv'
import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'

dotEnvConfig()

const config: HardhatUserConfig = {
  defaultNetwork: 'mainnet',
  networks: {

    localhost: {
      url: 'http://127.0.0.1:8545'
    },

    hardhat: {},

    testnet: {
      url: 'https://data-seed-prebsc-1-s1.bnbchain.org:8545',
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY as string]
    },

    mainnet: {
      url: 'https://bsc-dataseed.bnbchain.org/',
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY as string]
    }

  },

  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true
      }
    }
  },

  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts'
  },
  
  mocha: {
    timeout: 20000
  }

}

export default config