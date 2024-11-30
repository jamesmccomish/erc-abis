import { erc1271Abi } from "./erc-1271"
import { erc165Abi } from "./erc-165"
import { accountExecuteAbi as erc4337ExecuteAbi } from "./erc-4337"

/** [Minimal Modular Smart Accounts](https://eips.ethereum.org/EIPS/eip-7579) */

// Account

export const executionAbi = [
    "function execute(bytes32 mode, bytes calldata executionCalldata) external",
    "function executeFromExecutor(bytes32 mode, bytes calldata executionCalldata) external returns (bytes[] memory returnData)"
]

export const executionWith4337Abi = [...erc4337ExecuteAbi, ...executionAbi]

export const accountConfigAbi = [
    "function accountId() external view returns (string memory accountImplementationId)",
    "function supportsExecutionMode(bytes32 encodedMode) external view returns (bool)",
    "function supportsModule(uint256 moduleTypeId) external view returns (bool)"
]

export const moduleConfigAbi = [
    "event ModuleInstalled(uint256 indexed moduleTypeId, address indexed module)",
    "event ModuleUninstalled(uint256 indexed moduleTypeId, address indexed module)",
    "function installModule(uint256 moduleTypeId, address module, bytes calldata initData) external",
    "function uninstallModule(uint256 moduleTypeId, address module, bytes calldata deInitData) external",
    "function isModuleInstalled(uint256 moduleTypeId, address module, bytes calldata additionalContext) external view returns (bool)"
]

export const erc7579AccountAbi = [...executionWith4337Abi, ...accountConfigAbi, ...moduleConfigAbi, ...erc165Abi, ...erc1271Abi]

// Modules

export const moduleAbi = [
    "function onInstall(bytes calldata data) external",
    "function onUninstall(bytes calldata data) external",
    "function isModuleType(uint256 moduleTypeId) external view returns (bool)"
]

export const validatorBaseAbi = [
    "function validateUserOp(tuple(address sender, uint256 nonce, bytes initCode, bytes callData, bytes32 accountGasLimits, uint256 preVerificationGas, bytes32 gasFees, bytes paymasterAndData, bytes signature) calldata userOp, bytes32 userOpHash) external returns (uint256)",
    "function isValidSignatureWithSender(address sender, bytes32 hash, bytes calldata signature) external view returns (bytes4)"
]

export const validatorAbi = [...moduleAbi, ...validatorBaseAbi]

export const hookBaseAbi = [
    "function preCheck(address msgSender, uint256 value, bytes calldata msgData) external returns (bytes memory hookData)",
    "function postCheck(bytes calldata hookData) external"
]

export const hookAbi = [...moduleAbi, ...hookBaseAbi]

