
/** [Account Abstraction Using Alt Mempool](https://eips.ethereum.org/EIPS/eip-4337) */

/**
 * ERC-4337 is a collection of contracts which act together to enable smart contract accounts.
 * Here we define the ABI for each part of the system rather than a single ABI like most other standards.
 * Based of https://github.com/eth-infinitism/account-abstraction/releases/tag/v0.7.0
 */

export const stakeManagerAbi = [
    "event Deposited(address indexed account, uint256 totalDeposit)",
    "event Withdrawn(address indexed account, address withdrawAddress, uint256 amount)",
    "event StakeLocked(address indexed account, uint256 totalStaked, uint256 unstakeDelaySec)",
    "event StakeUnlocked(address indexed account, uint256 withdrawTime)",
    "event StakeWithdrawn(address indexed account, address withdrawAddress, uint256 amount)",
    "function getDepositInfo(address account) external view returns (tuple(uint256 deposit, bool staked, uint112 stake, uint32 unstakeDelaySec, uint48 withdrawTime))",
    "function balanceOf(address account) external view returns (uint256)",
    "function depositTo(address account) external payable",
    "function addStake(uint32 _unstakeDelaySec) external payable",
    "function unlockStake() external",
    "function withdrawStake(address payable withdrawAddress) external",
    "function withdrawTo(address payable withdrawAddress, uint256 withdrawAmount) external"
]

export const nonceManagerAbi = [
    "function getNonce(address sender, uint192 key) external view returns (uint256 nonce)",
    "function incrementNonce(uint192 key) external"
]

export const entryPointBaseAbi = [
    "event UserOperationEvent(bytes32 indexed userOpHash, address indexed sender, address indexed paymaster, uint256 nonce, bool success, uint256 actualGasCost, uint256 actualGasUsed)",
    "event AccountDeployed(bytes32 indexed userOpHash, address indexed sender, address factory, address paymaster)",
    "event UserOperationRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)",
    "event PostOpRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)",
    "event UserOperationPrefundTooLow(bytes32 indexed userOpHash, address indexed sender, uint256 nonce)",
    "event BeforeExecution()",
    "event SignatureAggregatorChanged(address indexed aggregator)",
    "function handleOps(tuple(address sender, uint256 nonce, bytes initCode, bytes callData, bytes32 accountGasLimits, uint256 preVerificationGas, bytes32 gasFees, bytes paymasterAndData, bytes signature)[] calldata ops, address payable beneficiary) external",
    "function handleAggregatedOps(tuple(tuple(address sender, uint256 nonce, bytes initCode, bytes callData, bytes32 accountGasLimits, uint256 preVerificationGas, bytes32 gasFees, bytes paymasterAndData, bytes signature)[] userOps, address aggregator, bytes signature)[] calldata opsPerAggregator, address payable beneficiary) external",
    "function getUserOpHash(tuple(address sender, uint256 nonce, bytes initCode, bytes callData, bytes32 accountGasLimits, uint256 preVerificationGas, bytes32 gasFees, bytes paymasterAndData, bytes signature) calldata userOp) external view returns (bytes32)",
    "function getSenderAddress(bytes memory initCode) external",
    "function delegateAndRevert(address target, bytes calldata data) external"
]

export const entryPointAbi = [...stakeManagerAbi, ...nonceManagerAbi, ...entryPointBaseAbi]

export const entryPointSimulationsAbi = [
    "function simulateValidation(tuple(address sender, uint256 nonce, bytes initCode, bytes callData, bytes32 accountGasLimits, uint256 preVerificationGas, bytes32 gasFees, bytes paymasterAndData, bytes signature) calldata userOp) external returns (tuple(tuple(uint256 preOpGas, uint256 prefund, uint256 accountValidationData, uint256 paymasterValidationData, bytes paymasterContext) returnInfo, tuple(address addr, uint256 stake, uint256 unstakeDelaySec) senderInfo, tuple(address addr, uint256 stake, uint256 unstakeDelaySec) factoryInfo, tuple(address addr, uint256 stake, uint256 unstakeDelaySec) paymasterInfo, tuple(address aggregator, tuple(address addr, uint256 stake, uint256 unstakeDelaySec) stakeInfo) aggregatorInfo))",
    "function simulateHandleOp(tuple(address sender, uint256 nonce, bytes initCode, bytes callData, bytes32 accountGasLimits, uint256 preVerificationGas, bytes32 gasFees, bytes paymasterAndData, bytes signature) calldata op, address target, bytes calldata targetCallData) external returns (tuple(uint256 preOpGas, uint256 paid, uint256 accountValidationData, uint256 paymasterValidationData, bool targetSuccess, bytes targetResult))"
]

export const aggregatorAbi = [
    "function validateSignatures(tuple(address sender, uint256 nonce, bytes initCode, bytes callData, bytes32 accountGasLimits, uint256 preVerificationGas, bytes32 gasFees, bytes paymasterAndData, bytes signature)[] calldata userOps, bytes calldata signature) external view",
    "function validateUserOpSignature(tuple(address sender, uint256 nonce, bytes initCode, bytes callData, bytes32 accountGasLimits, uint256 preVerificationGas, bytes32 gasFees, bytes paymasterAndData, bytes signature) calldata userOp) external view returns (bytes memory sigForUserOp)",
    "function aggregateSignatures(tuple(address sender, uint256 nonce, bytes initCode, bytes callData, bytes32 accountGasLimits, uint256 preVerificationGas, bytes32 gasFees, bytes paymasterAndData, bytes signature)[] calldata userOps) external view returns (bytes memory aggregatedSignature)"
]

export const accountAbi = [
    "function validateUserOp(tuple(address sender, uint256 nonce, bytes initCode, bytes callData, bytes32 accountGasLimits, uint256 preVerificationGas, bytes32 gasFees, bytes paymasterAndData, bytes signature) calldata userOp, bytes32 userOpHash, uint256 missingAccountFunds) external returns (uint256 validationData)"
]

export const accountExecuteAbi = [
    "function executeUserOp(tuple(address sender, uint256 nonce, bytes initCode, bytes callData, bytes32 accountGasLimits, uint256 preVerificationGas, bytes32 gasFees, bytes paymasterAndData, bytes signature) calldata userOp, bytes32 userOpHash) external"
]

export const erc4337AccountAbi = [...accountAbi, ...accountExecuteAbi]
