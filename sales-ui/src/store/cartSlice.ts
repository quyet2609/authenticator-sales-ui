import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { Product } from '../state/products'

export type CartItem = Product & { quantity: number }

export type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const index = state.items.findIndex((i) => i.id === action.payload.id)
      if (index !== -1) {
        state.items[index].quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    clear(state) {
      state.items = []
    },
  },
})

export const { addItem, removeItem, clear } = cartSlice.actions
export default cartSlice.reducer


