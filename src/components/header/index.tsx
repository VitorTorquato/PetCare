import { FiShoppingCart } from "react-icons/fi";

import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

import { Link } from "react-router-dom";




export function Header(){
    
    const {cartAmount} = useContext(CartContext);
    
   
    
   


    return(

        <header 
        className="bg-slate-300 w-full  flex items-center justify-center  py-6 px-2 mt-0 mx-auto"
        >
            <div
            className="w-full max-w-7xl items-center flex justify-between gap-12 mx-3 "
            >
                <div
                className="flex flex-col items-end "
                >
                    <Link to='/'>
                        <h1
                        className="font-bold text-4xl text-sky-600">Pet
                        <span 
                        className="text-zinc-900"
                        >Care</span></h1>
                    </Link>
                    <span
                    className=" text-sky-400"
                    >Shop Strore</span>
                </div>

               
                
                <Link
                 to='/cart'
                 className="relative"
                 >
                
                    <FiShoppingCart size={35} color="#121212"/>

                    {
                        cartAmount > 0 && (
                            <span
                    className="absolute -top-3 -right-3 px-2 pt-1 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs"
                    >{cartAmount}</span>
                        )
                    }
                </Link>
            </div>

            
            

        </header>

    )
    
}