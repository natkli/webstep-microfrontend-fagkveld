import { atom, useAtom } from "jotai";

const countAtom = atom(0);

export function useStore() {
  return useAtom(countAtom);
}
