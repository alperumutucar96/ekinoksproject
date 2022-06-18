import './App.css';
import {LoginPanel} from './LoginPanel/LoginPanel'
import 'antd/dist/antd.css';
// import {ProductList} from "./MainPage/ProductList";
import React, {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {List} from "antd";
import {LikeOutlined, MessageOutlined, StarOutlined} from "@ant-design/icons";
import {ProductList} from "./MainPage/ProductList";
import {MainPage} from "./MainPage/MainPage";

export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};

// const getToken = async (): string => await (
// fetch('https://fakestoreapi.com/auth/login', {
//     method: 'POST',
//     body: JSON.stringify({
//         username: "mor_2314",
//         password: "83r5^_"
//     })
// })
//     .then(res => {
//         console.log(res.json());
//         res.json()
//     })
//     .then(json => console.log(json))
// )

const getProducts = async (): Promise<CartItemType[]> =>
    await (await fetch("https://fakestoreapi.com/products")).json();


function App() {
    const [cartItems, setCartItems] = useState([] as CartItemType[]);
    const [authenticationKey, setAuthenticationKey] = useState("eyJhbGciOiJIUzI1NiIsInR");
    const {data, isLoading, error} = useQuery<CartItemType[]>(
            "products",
            getProducts,
        )
    ;

    const handleAddToCart = (clickedItem: CartItemType) => {
        setCartItems((prev) => {
            const isItemInCart = prev.find((item) => item.id === clickedItem.id);
            if (isItemInCart) {
                console.log(cartItems)
                return prev.map((item) =>
                    item.id === clickedItem.id
                        ? {...item, amount: item.amount + 1}
                        : item
                );
            }
            return [...prev, {...clickedItem, amount: 1}];
        });
    };

    useEffect(() => {
        // getToken()
        if (authenticationKey === "eyJhbGciOiJIUzI1NiIsInR") {
            setAuthenticated(true)
        }
        console.log(data)
        // getToken()
    });
    const [authenticated, setAuthenticated] = useState(false);
    return (
        <div className="App">
            <header className="App-header">
                {!authenticated && <LoginPanel></LoginPanel>}
                {authenticated && !isLoading &&
                    <MainPage data={data} handleAddToCart={handleAddToCart} cartItems={cartItems}></MainPage>}
            </header>
        </div>
    );
}

export default App;
