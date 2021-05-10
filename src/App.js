import React from "react";
// components
import Navbar from "./component/Navbar"
import CartContainer from "./component/CartContainer";

//reducer-function
import reducer from './reducer'
//redux & react-redux
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer)

function App() {
  
   return (
      <Provider store = {store}>
         <Navbar />
         <CartContainer />
      </Provider>
   );
}

export default App;
