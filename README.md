# erc-abis-ts

A collection of common ERC ABIs in human-readable form. ERCs are defined based on their required/optional items in the [Ethereum Improvement Proposals](https://eips.ethereum.org/all) list.


## Installation

```
npm install erc-abis-ts
```

## Usage

### Viem
```typescript
import { erc20Abi } from 'erc-abis-ts'
import { parseAbi, encodeFunctionData } from 'viem';

// Format the ABI from human-readable to JSON
const abi = parseAbi(erc20AbiHumanReadable);

// Encode calldata
const calldata = encodeFunctionData({
    abi: abi,
    function: 'balanceOf',
    args: ['0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC']
})

// Make a call to a contract
const balance = publicClient.readContract({
    address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    abi: abi,
    method: 'balanceOf',
    args: ['0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC']
    })
```

### Ethers
```typescript
import { erc20Abi } from 'erc-abis-ts'
import { Interface, Contract } from 'ethers/lib/utils';

const iface = new Interface(erc20Abi);

// Format the ABI from human-readable to JSON
const abi = iface.format(FormatTypes.JSON)

// Encode calldata
const calldata = iface.encodeFunctionData('balanceOf', ['0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC'])

// Make a call to a contract
const contract = new Contract('0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2', erc20Abi, provider)
const balance = await contract.balanceOf('0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC')

// Note that with ethers you can use the human-readable ABI directly without conversion to JSON
```

