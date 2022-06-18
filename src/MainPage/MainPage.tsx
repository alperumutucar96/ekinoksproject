import {Cart} from "./Cart";
import {ProductList} from "./ProductList";


export function MainPage(props: any) {

    return (
        <div>
            <Cart cartItems={props.cartItems}></Cart>
            <ProductList data={props.data} handleAddToCart={props.handleAddToCart}></ProductList>
        </div>
    )

};