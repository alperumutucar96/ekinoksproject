import './App.css';
import {LoginPanel} from './LoginPanel/LoginPanel'
import 'antd/dist/antd.css';
import {ProductList} from "./MainPage/ProductList";
import {useState} from "react";

export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
      <div className="App">
        <header className="App-header">
          {!authenticated && <LoginPanel></LoginPanel>}
          {authenticated && <ProductList></ProductList>}
        </header>
      </div>
  );
}

export default App;
