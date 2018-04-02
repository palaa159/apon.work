export default function ({ isHMR, app, store, route, params, error, redirect }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  if (store.state.purchase.isCartShowing) store.commit('SET_CART_SHOW', false)
}
