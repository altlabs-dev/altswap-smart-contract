import { ethers } from 'hardhat'
import type { Signer } from 'ethers'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

import { AltSwap } from './../typechain-types/AltSwap'
import { AltSwap__factory } from './../typechain-types/factories/AltSwap__factory'

chai.use(chaiAsPromised)

const { expect } = chai

describe('AltSwap', () => {
  let altSwapFactory: AltSwap__factory
  let altSwap: AltSwap

  describe('Deployment', () => {
    let deployer: Signer

    beforeEach(async () => {

      [deployer] = await ethers.getSigners()
      altSwapFactory = new AltSwap__factory(deployer)

      altSwap = await altSwapFactory.deploy(
        deployer, 
        '0x10ED43C718714eb63d5aA57B78B54704E256024E',
        '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
      )

      await altSwap.deployed()
      
    })

    it('should have the correct address', async () => {
      expect(altSwap.address)
    })
  })
})