import { erc2612Abi } from "./erc-2612";

/** [ERC-4626: Tokenized Vaults](https://eips.ethereum.org/EIPS/eip-4626) */
export const erc4626AbiRequired = [
	"event Deposit(address sender indexed, address owner indexed, uint256 assets, uint256 shares)",
	"event Withdraw(address sender indexed, address receiver indexed, address owner indexed, uint256 assets, uint256 shares)",
	"function asset() view returns (address)",
	"function totalAssets() view returns (uint256)",
	"function convertToShares(uint256 assets) view returns (uint256)",
	"function convertToAssets(uint256 shares) view returns (uint256)",
	"function maxDeposit(address receiver) view returns (uint256)",
	"function previewDeposit(uint256 assets) view returns (uint256)",
	"function deposit(uint256 assets, address receiver) returns (uint256)",
	"function maxMint(address receiver) view returns (uint256)",
	"function previewMint(uint256 shares) view returns (uint256)",
	"function mint(uint256 shares, address receiver) returns (uint256)",
	"function maxWithdraw(address owner) view returns (uint256)",
	"function previewWithdraw(uint256 assets) view returns (uint256)",
	"function withdraw(uint256 assets, address receiver, address owner) returns (uint256)",
	"function maxRedeem(address owner) view returns (uint256)",
	"function previewRedeem(uint256 shares) view returns (uint256)",
	"function redeem(uint256 shares, address receiver, address owner) returns (uint256)",
];

// ERC-2612 is optional but generally recommended for ERC-4626, and since it 
// includes ERC-20 which is required for ERC-4626, we can include it here.
export const erc4626Abi = [...erc2612Abi, ...erc4626AbiRequired];
