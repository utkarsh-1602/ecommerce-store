import { create } from "zustand";

import { Product } from '@/types'

interface PreviewModalStore {
    isOpen: boolean;
    data?: Product;
    onOpen: (data: Product) => void; // data which is the type of product 
    onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({ data: data, isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default usePreviewModal;