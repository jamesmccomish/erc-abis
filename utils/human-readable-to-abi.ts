import { formatAbi, parseAbi } from "abitype";

export function humanReadableToAbi(humanReadable) {
	const abi = parseAbi(humanReadable);
	return formatAbi(abi);
}

export function abiToHumanReadable(abi) {
	const humanReadable = formatAbi(abi);
	return humanReadable;
}

import {
	erc20Abi,
	erc20AbiOptional,
	erc20AbiRequired,
} from "../src/ercs/erc-20/abi";
import {
	erc721AbiRequired,
	erc721EnumerableAbi,
	erc721MetadataAbi,
	erc721TokenReceiverAbi,
} from "../src/ercs/erc-721/abi.human-readable";
import { erc165Abi } from "../src/ercs/erc-165/abi.human-readable";
import {
	erc1155AbiRequired,
	erc1155TokenReceiverAbi,
	erc1155MetadataAbi,
} from "../src/ercs/erc-1155/abi.human-readable";
import { erc2612AbiRequired } from "../src/ercs/erc-2612/abi.human-readable";
import { erc4626AbiRequired } from "../src/ercs/erc-4626/abi.human-readable";

function run() {
	// const abi = erc165Abi
	//console.log(abi)

	// console.log('--------', ...parseAbi(erc721AbiRequired))
	// console.log('--------', ...parseAbi(erc721EnumerableAbi))
	// console.log('--------', ...parseAbi(erc721MetadataAbi))
	// console.log('--------', ...parseAbi(erc721TokenReceiverAbi))

	// console.log("--------", ...parseAbi(erc1155AbiRequired));
	// console.log("--------", ...parseAbi(erc1155TokenReceiverAbi));
	// console.log("--------", ...parseAbi(erc1155MetadataAbi));

	//console.log("--------", ...parseAbi(erc2612AbiRequired));

	console.log("--------", ...parseAbi(erc4626AbiRequired));
}

run();
