import { ethers } from 'hardhat'

async function main() {

  const [deployer] = await ethers.getSigners()

  console.log('Deploying contracts with the account: ', deployer.address)

  console.log('Account balance: ', (await deployer.provider.getBalance(deployer.address)).toString())

  const altSwapFactory = await ethers.getContractFactory('AltSwap')
  const altSwap = await altSwapFactory.deploy(
    deployer.address, 
    '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  )

  console.log('AltSwap deployed to:', (await altSwap.getAddress()))
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})