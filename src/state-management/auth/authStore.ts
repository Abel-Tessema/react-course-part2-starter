import {create} from "zustand";

interface AuthStore {
  user: string,
  logIn: (user: string) => void,
  logout: () => void,
}

const useAuthStore = create<AuthStore>(set => ({
  user: "",
  logIn: (user: string) => set(() => ({user: user})),
  logout: () => set(() => ({user: ""}))
}));

export default useAuthStore;