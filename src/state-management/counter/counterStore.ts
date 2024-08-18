import {create} from "zustand";
import * as process from "node:process";
import {mountStoreDevtool} from "simple-zustand-devtools";

interface CounterStore {
  counter: number,
  max: number,
  increment: () => void,
  reset: () => void
}

const useCounterStore = create<CounterStore>(set => ({
  counter: 0,
  max: 5,
  increment: () => set(store => ({counter: store.counter + 1})),
  reset: () => set(() => ({max: 0})),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Counter Store", useCounterStore);

export default useCounterStore;