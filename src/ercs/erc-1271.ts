/** [ERC-1271 Standard Signature Validation Method for Contracts](https://eips.ethereum.org/EIPS/eip-1271) */
export const erc1271Abi = [
    "function isValidSignature(bytes32 hash, bytes memory signature) view returns (bytes4)",
];