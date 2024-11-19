# erc-abis-ts

A collection of common ERC ABIs in both ABI and human-readable form. ERCs are defined based on their required/optional items in the [Ethereum Improvement Proposals](https://eips.ethereum.org/all) list.


## Installation

```
npm install erc-abis-ts
```

## Usage

```typescript
import { erc20AbiHumanReadable, erc20Abi } from 'erc-abis-ts'
import { parseAbi } from 'viem';

// Below is equivalent to erc20Abi
const abi = parseAbi(erc20AbiHumanReadable);
```

