import { ethers, hardhatArguments } from "hardhat";
import * as Config from "./config";

async function main() {
  await Config.initConfig();
  const network = hardhatArguments.network ? hardhatArguments.network : "dev";
  const [deployer] = await ethers.getSigners();
  console.log(deployer.address);

  const Floppy = await ethers.getContractFactory("Floppy");
  const floppy = await Floppy.deploy();
  console.log("Floppy address: ", floppy.address);
  Config.setConfig(network + ".Floppy", floppy.address);

  // const Vault = await ethers.getContractFactory("Vault");
  // const vault = await Vault.deploy();
  // console.log("Vault address: ", vault.address);
  // Config.setConfig(network + ".Vault", vault.address);

  // const USDT = await ethers.getContractFactory("USDT");
  // const usdt = await USDT.deploy();
  // console.log("USDT address: ", usdt.address);
  // Config.setConfig(network + ".USDT", usdt.address);

  // const Ico = await ethers.getContractFactory("FLPCrowdSale");
  // const ico = await Ico.deploy(
  //   1000,
  //   100,
  //   "0x521e0d7f2aa714f630a17aE5000858681A46a2F5",
  //   "0x0612bC2dD472e723Ab4C5355347c85a563992D8C"
  // );
  // console.log("Ico address: ", ico.address);
  // Config.setConfig(network + ".Ico", ico.address);

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
