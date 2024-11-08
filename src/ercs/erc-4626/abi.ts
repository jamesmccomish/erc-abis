/** [ERC-4626: Tokenized Vaults](https://eips.ethereum.org/EIPS/eip-4626) */
export const erc4626AbiRequired = [
	{
		name: "asset",
		type: "function",
		stateMutability: "view",
		inputs: [],
		outputs: [
			{
				type: "address",
			},
		],
	},
	{
		name: "totalAssets",
		type: "function",
		stateMutability: "view",
		inputs: [],
		outputs: [
			{
				type: "uint256",
			},
		],
	},
	{
		name: "convertToShares",
		type: "function",
		stateMutability: "view",
		inputs: [
			{
				type: "uint256",
				name: "assets",
			},
		],
		outputs: [
			{
				type: "uint256",
			},
		],
	},
	{
		name: "convertToAssets",
		type: "function",
		stateMutability: "view",
		inputs: [
			{
				type: "uint256",
				name: "shares",
			},
		],
		outputs: [
			{
				type: "uint256",
			},
		],
	},
	{
		name: "maxDeposit",
		type: "function",
		stateMutability: "view",
		inputs: [
			{
				type: "address",
				name: "receiver",
			},
		],
		outputs: [
			{
				type: "uint256",
			},
		],
	},
	{
		name: "previewDeposit",
		type: "function",
		stateMutability: "view",
		inputs: [
			{
				type: "uint256",
				name: "assets",
			},
		],
		outputs: [
			{
				type: "uint256",
			},
		],
	},
	{
		name: "deposit",
		type: "function",
		stateMutability: "nonpayable",
		inputs: [
			{
				type: "uint256",
				name: "assets",
			},
			{
				type: "address",
				name: "receiver",
			},
		],
		outputs: [
			{
				type: "uint256",
			},
		],
	},
	{
		name: "maxMint",
		type: "function",
		stateMutability: "view",
		inputs: [
			{
				type: "address",
				name: "receiver",
			},
		],
		outputs: [
			{
				type: "uint256",
			},
		],
	},
	{
		name: "previewMint",
		type: "function",
		stateMutability: "view",
		inputs: [
			{
				type: "uint256",
				name: "shares",
			},
		],
		outputs: [
			{
				type: "uint256",
			},
		],
	},
	{
		name: "mint",
		type: "function",
		stateMutability: "nonpayable",
		inputs: [
			{
				type: "uint256",
				name: "shares",
			},
			{
				type: "address",
				name: "receiver",
			},
		],
		outputs: [
			{
				type: "uint256",
			},
		],
	},
	{
		name: "maxWithdraw",
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
		name: "previewWithdraw",
		type: "function",
		stateMutability: "view",
		inputs: [
			{
				type: "uint256",
				name: "assets",
			},
		],
		outputs: [
			{
				type: "uint256",
			},
		],
	},
	{
		name: "withdraw",
		type: "function",
		stateMutability: "nonpayable",
		inputs: [
			{
				type: "uint256",
				name: "assets",
			},
			{
				type: "address",
				name: "receiver",
			},
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
		name: "maxRedeem",
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
		name: "previewRedeem",
		type: "function",
		stateMutability: "view",
		inputs: [
			{
				type: "uint256",
				name: "shares",
			},
		],
		outputs: [
			{
				type: "uint256",
			},
		],
	},
	{
		name: "redeem",
		type: "function",
		stateMutability: "nonpayable",
		inputs: [
			{
				type: "uint256",
				name: "shares",
			},
			{
				type: "address",
				name: "receiver",
			},
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
];
