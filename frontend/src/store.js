import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, producDetailsReducer } from './reducers/productReducer.js'

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: producDetailsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store 