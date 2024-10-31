/** [ERC-721: Non-Fungible Token Standard](https://eips.ethereum.org/EIPS/eip-721) */
export const erc721AbiRequired = [
    "event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId)",
    "event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId)",
    "event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved)",
    "function balanceOf(address _owner) external view returns (uint256)",
    "function ownerOf(uint256 _tokenId) external view returns (address)",
    "function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable",
    "function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable",
    "function transferFrom(address _from, address _to, uint256 _tokenId) external payable",
    "function approve(address _approved, uint256 _tokenId) external payable",
    "function setApprovalForAll(address _operator, bool _approved) external",
    "function getApproved(uint256 _tokenId) external view returns(address)",
    "function isApprovedForAll(address _owner, address _operator) external view returns(bool)"
]

export const erc721TokenReceiverAbi = [
    "function onERC721Received(address _operator, address _from, uint256 _tokenId, bytes _data) external returns(bytes4)"
]

export const erc721MetadataAbi = [
    "function name() external view returns (string)",
    "function symbol() external view returns (string)",
    "function tokenURI(uint256 _tokenId) external view returns (string)"
]

export const erc721EnumerableAbi = [
    "function totalSupply() external view returns (uint256)",
    "function tokenByIndex(uint256 _index) external view returns (uint256)",
    "function tokenOfOwnerByIndex(address _owner, uint256 _index) external view returns (uint256)",
]