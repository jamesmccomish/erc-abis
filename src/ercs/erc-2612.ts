import { erc20Abi } from "../erc-20";

/** [ERC-2612: Permit Extension for EIP-20 Signed Approvals](https://eips.ethereum.org/EIPS/eip-2612) */
export const erc2612AbiRequired = [
	"function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s)",
	"function nonces(address owner) view returns (uint256)",
	"function DOMAIN_SEPARATOR() view returns (bytes32)",
];

export const erc2612Abi = [...erc20Abi, ...erc2612AbiRequired];
