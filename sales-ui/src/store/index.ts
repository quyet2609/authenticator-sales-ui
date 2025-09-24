import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

const PERSIST_KEY = 'sales-ui-store'

function loadState() {
  try {
    const serialized = localStorage.getItem(PERSIST_KEY)
    if (!serialized) return undefined
    return JSON.parse(serialized)
  } catch {
    return undefined
  }
}

function saveState(state: unknown) {
  try {
    localStorage.setItem(PERSIST_KEY, JSON.stringify(state))
  } catch {}
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadState(),
})

store.subscribe(() => {
  const state = store.getState()
  saveState({ cart: state.cart })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


