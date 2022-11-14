import { ethers, hardhatArguments } from "hardhat";
import * as Config from "./config";

async function main() {
  await Config.initConfig();
  const network = hardhatArguments.network ? hardhatArguments.network : "dev";
  const [deployer] = await ethers.getSigners();
  console.log(deployer.address);

  // const Floppy = await ethers.getContractFactory("Hust");
  // const floppy = await Floppy.deploy();
  // console.log("Hust address: ", floppy.address);
  // Config.setConfig(network + ".Hust", floppy.address);

  // const USDT = await ethers.getContractFactory("USDT");
  // const usdt = await USDT.deploy();
  // console.log("USDT address: ", usdt.address);
  // Config.setConfig(network + ".USDT", usdt.address);

  const Ico = await ethers.getContractFactory("CrowdSale");
  const ico = await Ico.deploy(
    1000,
    100,
    "0x521e0d7f2aa714f630a17aE5000858681A46a2F5",
    "0x7f80569b7516E81E3AE2300E34D20D6015f560eB"
  );
  console.log("Ico address: ", ico.address);
  Config.setConfig(network + ".Ico", ico.address);

  await Config.updateConfig();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
