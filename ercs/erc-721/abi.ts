/** [ERC-721: Non-Fungible Token Standard](https://eips.ethereum.org/EIPS/eip-721) */
export const erc721AbiRequired = [{
    name: "Transfer",
    type: "event",
    inputs: [
        {
            type: "address",
            name: "_from",
            indexed: true,
        }, {
            type: "address",
            name: "_to",
            indexed: true,
        }, {
            type: "uint256",
            name: "_tokenId",
            indexed: true,
        }
    ],
}, {
    name: "Approval",
    type: "event",
    inputs: [
        {
            type: "address",
            name: "_owner",
            indexed: true,
        }, {
            type: "address",
            name: "_approved",
            indexed: true,
        }, {
            type: "uint256",
            name: "_tokenId",
            indexed: true,
        }
    ],
}, {
    name: "ApprovalForAll",
    type: "event",
    inputs: [
        {
            type: "address",
            name: "_owner",
            indexed: true,
        }, {
            type: "address",
            name: "_operator",
            indexed: true,
        }, {
            type: "bool",
            name: "_approved",
        }
    ],
}, {
    name: "balanceOf",
    type: "function",
    stateMutability: "view",
    inputs: [
        {
            type: "address",
            name: "_owner",
        }
    ],
    outputs: [
        {
            type: "uint256",
        }
    ],
}, {
    name: "ownerOf",
    type: "function",
    stateMutability: "view",
    inputs: [
        {
            type: "uint256",
            name: "_tokenId",
        }
    ],
    outputs: [
        {
            type: "address",
        }
    ],
}, {
    name: "safeTransferFrom",
    type: "function",
    stateMutability: "payable",
    inputs: [
        {
            type: "address",
            name: "_from",
        }, {
            type: "address",
            name: "_to",
        }, {
            type: "uint256",
            name: "_tokenId",
        }, {
            type: "bytes",
            name: "data",
        }
    ],
    outputs: [],
}, {
    name: "safeTransferFrom",
    type: "function",
    stateMutability: "payable",
    inputs: [
        {
            type: "address",
            name: "_from",
        }, {
            type: "address",
            name: "_to",
        }, {
            type: "uint256",
            name: "_tokenId",
        }
    ],
    outputs: [],
}, {
    name: "transferFrom",
    type: "function",
    stateMutability: "payable",
    inputs: [
        {
            type: "address",
            name: "_from",
        }, {
            type: "address",
            name: "_to",
        }, {
            type: "uint256",
            name: "_tokenId",
        }
    ],
    outputs: [],
}, {
    name: "approve",
    type: "function",
    stateMutability: "payable",
    inputs: [
        {
            type: "address",
            name: "_approved",
        }, {
            type: "uint256",
            name: "_tokenId",
        }
    ],
    outputs: [],
}, {
    name: "setApprovalForAll",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
        {
            type: "address",
            name: "_operator",
        }, {
            type: "bool",
            name: "_approved",
        }
    ],
    outputs: [],
}, {
    name: "getApproved",
    type: "function",
    stateMutability: "view",
    inputs: [
        {
            type: "uint256",
            name: "_tokenId",
        }
    ],
    outputs: [
        {
            type: "address",
        }
    ],
}, {
    name: "isApprovedForAll",
    type: "function",
    stateMutability: "view",
    inputs: [
        {
            type: "address",
            name: "_owner",
        }, {
            type: "address",
            name: "_operator",
        }
    ],
    outputs: [
        {
            type: "bool",
        }
    ],
}
]

export const erc721TokenReceiverAbi = [{
    name: "onERC721Received",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
        {
            type: "address",
            name: "_operator",
        }, {
            type: "address",
            name: "_from",
        }, {
            type: "uint256",
            name: "_tokenId",
        }, {
            type: "bytes",
            name: "_data",
        }
    ],
    outputs: [
        {
            type: "bytes4",
        }
    ],
}]

export const erc721MetadataAbi = [{
    name: "name",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [
        {
            type: "string",
        }
    ],
}, {
    name: "symbol",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [
        {
            type: "string",
        }
    ],
}, {
    name: "tokenURI",
    type: "function",
    stateMutability: "view",
    inputs: [
        {
            type: "uint256",
            name: "_tokenId",
        }
    ],
    outputs: [
        {
            type: "string",
        }
    ],
}
]

export const erc721EnumerableAbi = [{
    name: "totalSupply",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [
        {
            type: "uint256",
        }
    ],
}, {
    name: "tokenByIndex",
    type: "function",
    stateMutability: "view",
    inputs: [
        {
            type: "uint256",
            name: "_index",
        }
    ],
    outputs: [
        {
            type: "uint256",
        }
    ],
}, {
    name: "tokenOfOwnerByIndex",
    type: "function",
    stateMutability: "view",
    inputs: [
        {
            type: "address",
            name: "_owner",
        }, {
            type: "uint256",
            name: "_index",
        }
    ],
    outputs: [
        {
            type: "uint256",
        }
    ],
}
]
