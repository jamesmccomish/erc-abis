/** [ERC-165: Standard Interface Detection](https://eips.ethereum.org/EIPS/eip-165) */
export const erc165Abi = {
    name: "supportsInterface",
    type: "function",
    stateMutability: "view",
    inputs: [
        {
            type: "bytes4",
            name: "interfaceID",
        }
    ],
    outputs: [
        {
            type: "bool",
        }
    ]
}