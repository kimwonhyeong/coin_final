import {atom, selector} from "recoil";


export const PChange24Atom = atom<string[][] | undefined>({
	key: "PChange24",
	default: [],
});

export const BoxAtom= atom<boolean>({
	key: "Box",
	default: false,
});