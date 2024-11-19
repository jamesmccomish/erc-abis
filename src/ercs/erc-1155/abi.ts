import { erc165Abi } from "../erc-165/abi";

/** [ERC-1155: Multi Token Standard](https://eips.ethereum.org/EIPS/eip-1155) */
export const erc1155AbiRequired = [{
	name: "TransferSingle",
	type: "event",
	inputs: [
		{
			type: "address",
			name: "operator",
			indexed: true,
		}, {
			type: "address",
			name: "from",
			indexed: true,
		}, {
			type: "address",
			name: "to",
			indexed: true,
		}, {
			type: "uint256",
			name: "id",
		}, {
			type: "uint256",
			name: "value",
		}
	],
}, {
	name: "TransferBatch",
	type: "event",
	inputs: [
		{
			type: "address",
			name: "operator",
			indexed: true,
		}, {
			type: "address",
			name: "from",
			indexed: true,
		}, {
			type: "address",
			name: "to",
			indexed: true,
		}, {
			type: "uint256[]",
			name: "ids",
		}, {
			type: "uint256[]",
			name: "values",
		}
	],
}, {
	name: "ApprovalForAll",
	type: "event",
	inputs: [
		{
			type: "address",
			name: "account",
			indexed: true,
		}, {
			type: "address",
			name: "operator",
			indexed: true,
		}, {
			type: "bool",
			name: "approved",
		}
	],
}, {
	name: "URI",
	type: "event",
	inputs: [
		{
			type: "string",
			name: "value",
		}, {
			type: "uint256",
			name: "id",
			indexed: true,
		}
	],
}, {
	name: "balanceOf",
	type: "function",
	stateMutability: "view",
	inputs: [
		{
			type: "address",
			name: "account",
		}, {
			type: "uint256",
			name: "id",
		}
	],
	outputs: [
		{
			type: "uint256",
		}
	],
}, {
	name: "balanceOfBatch",
	type: "function",
	stateMutability: "view",
	inputs: [
		{
			type: "address[]",
			name: "accounts",
		}, {
			type: "uint256[]",
			name: "ids",
		}
	],
	outputs: [
		{
			type: "uint256[]",
		}
	],
}, {
	name: "setApprovalForAll",
	type: "function",
	stateMutability: "nonpayable",
	inputs: [
		{
			type: "address",
			name: "operator",
		}, {
			type: "bool",
			name: "approved",
		}
	],
	outputs: [],
}, {
	name: "isApprovedForAll",
	type: "function",
	stateMutability: "view",
	inputs: [
		{
			type: "address",
			name: "account",
		}, {
			type: "address",
			name: "operator",
		}
	],
	outputs: [
		{
			type: "bool",
		}
	],
}, {
	name: "safeTransferFrom",
	type: "function",
	stateMutability: "nonpayable",
	inputs: [
		{
			type: "address",
			name: "from",
		}, {
			type: "address",
			name: "to",
		}, {
			type: "uint256",
			name: "id",
		}, {
			type: "uint256",
			name: "amount",
		}, {
			type: "bytes",
			name: "data",
		}
	],
	outputs: [],
}, {
	name: "safeBatchTransferFrom",
	type: "function",
	stateMutability: "nonpayable",
	inputs: [
		{
			type: "address",
			name: "from",
		}, {
			type: "address",
			name: "to",
		}, {
			type: "uint256[]",
			name: "ids",
		}, {
			type: "uint256[]",
			name: "amounts",
		}, {
			type: "bytes",
			name: "data",
		}
	],
	outputs: [],
}]

export const erc1155TokenReceiverAbi = [{
	name: "onERC1155Received",
	type: "function",
	stateMutability: "nonpayable",
	inputs: [
		{
			type: "address",
			name: "operator",
		}, {
			type: "address",
			name: "from",
		}, {
			type: "uint256",
			name: "id",
		}, {
			type: "uint256",
			name: "value",
		}, {
			type: "bytes",
			name: "data",
		}
	],
	outputs: [
		{
			type: "bytes4",
		}
	],
}, {
	name: "onERC1155BatchReceived",
	type: "function",
	stateMutability: "nonpayable",
	inputs: [
		{
			type: "address",
			name: "operator",
		}, {
			type: "address",
			name: "from",
		}, {
			type: "uint256[]",
			name: "ids",
		}, {
			type: "uint256[]",
			name: "values",
		}, {
			type: "bytes",
			name: "data",
		}
	],
	outputs: [
		{
			type: "bytes4",
		}
	],
}]

export const erc1155MetadataAbi = [{
	name: "uri",
	type: "function",
	stateMutability: "view",
	inputs: [
		{
			type: "uint256",
			name: "id",
		}
	],
	outputs: [
		{
			type: "string",
		}
	],
}]

export const erc1155Abi = [...erc1155AbiRequired, ...erc1155MetadataAbi, ...erc165Abi]