import { erc20Abi } from "../erc-20/abi";

/** [ERC-2612: Permit Extension for EIP-20 Signed Approvals](https://eips.ethereum.org/EIPS/eip-2612) */
export const erc2612AbiRequired = [
	{
		name: "permit",
		type: "function",
		stateMutability: "nonpayable",
		inputs: [
			{
				type: "address",
				name: "owner",
			},
			{
				type: "address",
				name: "spender",
			},
			{
				type: "uint256",
				name: "value",
			},
			{
				type: "uint256",
				name: "deadline",
			},
			{
				type: "uint8",
				name: "v",
			},
			{
				type: "bytes32",
				name: "r",
			},
			{
				type: "bytes32",
				name: "s",
			},
		],
		outputs: [],
	},
	{
		name: "nonces",
		type: "function",
		stateMutability: "view",
		inputs: [
			{
				type: "address",
				name: "owner",
			},
		],
		outputs: [
			{
				type: "uint256",
			},
		],
	},
	{
		name: "DOMAIN_SEPARATOR",
		type: "function",
		stateMutability: "view",
		inputs: [],
		outputs: [
			{
				type: "bytes32",
			},
		],
	},
];

export const erc2612Abi = [...erc20Abi, ...erc2612AbiRequired];
