import { erc165Abi } from "../erc-165";

/** [ERC-1155: Multi Token Standard](https://eips.ethereum.org/EIPS/eip-1155) */
export const erc1155AbiRequired = [
	"event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)",
	"event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)",
	"event ApprovalForAll(address indexed account, address indexed operator, bool approved)",
	"event URI(string value, uint256 indexed id)",
	"function balanceOf(address account, uint256 id) view returns (uint256)",
	"function balanceOfBatch(address[] accounts, uint256[] ids) view returns (uint256[])",
	"function setApprovalForAll(address operator, bool approved)",
	"function isApprovedForAll(address account, address operator) view returns (bool)",
	"function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data)",
	"function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data)",
];

export const erc1155TokenReceiverAbi = [
	"function onERC1155Received(address operator, address from, uint256 id, uint256 value, bytes data) returns (bytes4)",
	"function onERC1155BatchReceived(address operator, address from, uint256[] ids, uint256[] values, bytes data) returns (bytes4)",
];

export const erc1155MetadataAbi = [
	"function uri(uint256 id) view returns (string)",
];

// Ommiting erc1155TokenReceiverAbi as it is used by the receiver of the token
export const erc1155Abi = [...erc1155AbiRequired, ...erc1155MetadataAbi, ...erc165Abi];
