// A reducer is how we specify the app state changes in response to certain actions to the store/to the context.

// The action.type can be seen as an id for an action
export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      // We filter out the transaction having the id coming from the payload, cause we cant to delete this one
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      // We filter out the transaction having the id coming from the payload, cause we cant to delete this one
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
    default:
      return state;
  }
}