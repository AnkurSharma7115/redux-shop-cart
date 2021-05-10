import { CLEAR_CART, DECREASE, INCREASE, REMOVE, GET_TOTALS } from "./actions"
import cartItems from "./data"

const initialStore = {
   cart: cartItems,
   total: 0,
   amount: 0,
}

const reducer = (state = initialStore, action) => {
   if (action.type === CLEAR_CART) {
      return { ...state, cart: [] }
   }

   if (action.type === REMOVE) {
      return {
         ...state,
         cart: state.cart.filter(
            (cartItem) => cartItem.id !== action.payload.id
         ),
      }
   }

   if (action.type === INCREASE) {
      let tempCart = state.cart.map((cartItem) => {
         if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, amount: cartItem.amount + 1 }
         }
         return cartItem
      })
      return { ...state, cart: tempCart }
   }

   if (action.type === DECREASE) {
      let tempCart = state.cart.map((cartItem) => {
         if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, amount: cartItem.amount - 1 }
         }
         return cartItem
      })
      return { ...state, cart: tempCart }
   }

   if (action.type === GET_TOTALS) {
      let { total, amount } = state.cart.reduce(
         (cartTotal, cartItem) => {
            const { price, amount } = cartItem
            const itemTotal = price * amount

            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
         },
         {
            total: 0,
            amount: 0,
         }
      )
      total = parseFloat(total.toFixed(2))
      return { ...state, total, amount }
   }
   return state
}

export default reducer
