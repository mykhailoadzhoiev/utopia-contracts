async function main() {
  const ERC1155 = await ethers.getContractFactory("AAACryptoAccessories");
  console.log("Deploying ERC1155...");
  
  const erc1155 = await ERC1155.deploy();
  console.log("Contract ERC1155 deployed to address:", erc1155.address);
}


main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});