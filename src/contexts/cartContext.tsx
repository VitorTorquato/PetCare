import { createContext , ReactNode, useState } from "react";




import { ProductProps } from "../components/card";

interface CartProps{
    id:number
    title:string;
    cover:string;
    description?:string;
    price:number;
    amount:number
    total:number
}

interface ContextCartData{
    cart: CartProps[];
    cartAmount:number;
    total:string;
    addItem: (newItem:ProductProps) => void;
    handleRemoveItem: (product:CartProps) => void;
    handleDecreaseItemCart: (product:CartProps) => void;
    handleCleanCart: () => void

}

interface CartProviderProps {
    children:ReactNode
}

export const CartContext = createContext({} as ContextCartData);


function CartProvider({children}:CartProviderProps){

    const [cart,setCart] = useState<CartProps[]>([])
    const [total,setTotal] = useState('')



    function addItem(newItem:ProductProps){

        const indexItem = cart.findIndex((item) => item.id === newItem.id)

        if(indexItem !== -1){
                const cartList = cart;

                cartList[indexItem].amount = cartList[indexItem].amount + 1;
                cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

                setCart(cartList);
                handleGetTotal(cartList);

                return
        }

        const data  = {
            ...newItem,
            amount: 1,
            total: newItem.price
        
        }

        setCart(prevState => [...prevState, data]);
        handleGetTotal([...cart,data])

    }


    function handleDecreaseItemCart(product:CartProps){

            const indexItem = cart.findIndex(item => item.id === product.id )

            if(cart[indexItem]?.amount > 1){
                const cartList = cart;

                cartList[indexItem].amount = cartList[indexItem].amount - 1;
                cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

                setCart(cartList);
                handleGetTotal(cartList);
                return;


            }

    }

    function handleRemoveItem(product:CartProps){
        const removeItem = cart.filter((item) => item.id !==  product.id)
       
        setCart(removeItem);
        handleGetTotal(removeItem);
    }

    function handleGetTotal(product:CartProps[]){

            const myCart = product;
            const result = myCart.reduce((acc,obj) => {return acc + obj.total} , 0 );


            const resultformated = result.toLocaleString('en-GB' , {
                style: 'currency',
                currency: 'EUR'
            });

            setTotal(resultformated)

    }

    function handleCleanCart(){
       
        setCart([])

        return;
    }



    return(

        <CartContext.Provider value={{
            cart,
            cartAmount:cart.length,
            total,
            addItem,
            handleRemoveItem,
            handleDecreaseItemCart,
            handleCleanCart
        }}>
            {children}
        </CartContext.Provider>

    )

}

export default CartProvider