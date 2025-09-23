import { createContext, PropsWithChildren, useContext, useMemo, useReducer } from 'react'
import type { Product } from './products'

export type CartItem = Product & { quantity: number }

type CartState = {
  items: CartItem[]
}

type CartAction =
  | { type: 'ADD'; product: Product }
  | { type: 'REMOVE'; id: string }
  | { type: 'CLEAR' }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const existingIndex = state.items.findIndex((i) => i.id === action.product.id)
      if (existingIndex !== -1) {
        const next = [...state.items]
        next[existingIndex] = { ...next[existingIndex], quantity: next[existingIndex].quantity + 1 }
        return { items: next }
      }
      return { items: [...state.items, { ...action.product, quantity: 1 }] }
    }
    case 'REMOVE': {
      return { items: state.items.filter((i) => i.id !== action.id) }
    }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

type CartContextValue = {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  clear: () => void
  total: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const value = useMemo<CartContextValue>(() => {
    const total = state.items.reduce((sum, it) => sum + it.price * it.quantity, 0)
    return {
      items: state.items,
      addItem: (product) => dispatch({ type: 'ADD', product }),
      removeItem: (id) => dispatch({ type: 'REMOVE', id }),
      clear: () => dispatch({ type: 'CLEAR' }),
      total,
    }
  }, [state.items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}



