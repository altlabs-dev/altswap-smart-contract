import { ethers } from 'hardhat'

async function main() {

  const [deployer] = await ethers.getSigners()

  const altSwapFactory = await ethers.getContractFactory('AltSwap')
  const altSwap = await altSwapFactory.deploy(
    deployer, 
    '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  )

  await altSwap.deployed()

  console.log('AltSwap deployed to:', altSwap.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})