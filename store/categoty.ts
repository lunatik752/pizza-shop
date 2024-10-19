import {create} from "zustand";

type StateType = {
    activeId: number,
    setActiveId: (activeId: number) => void,
}

export const useCategoryStore = create<StateType>((set) => (
    {
        activeId: 0,
        setActiveId: (activeId: number) => set({activeId}),
    }
))