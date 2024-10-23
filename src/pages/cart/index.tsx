import {FiMinus , FiPlus} from 'react-icons/fi'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'




export function Cart(){

    const {cart,total,handleRemoveItem,handleDecreaseItemCart,addItem,handleCleanCart} = useContext(CartContext);

    const navigate = useNavigate();

    function handlePayment(){
        navigate('/success')
        handleCleanCart();
    }


    

    return(



        <div 
        className="w-full max-w-7xl mx-auto pb-16 px-2"
        >
            <h1
            className="font-medium text-4xl text-center my-4"
            >Cart</h1>

            {
                cart.length === 0 && (
                    <div 
                    className='flex flex-col items-center justify-center'>
                        <p
                        className='font-medium'
                        >Your cart is currently empty</p>
                        <Link 
                        className='bg-blue-500 my-3 p-1 px-3 text-white font-medium rounded'
                        to='/'> 
                            continue shopping
                        </Link>
                    </div>
                )
            }

        <div 
        className='w-full flex flex-col items-center sm:flex-row sm:items-end  gap-5'
        >
            <div
            className='flex-1'
            >
              {
                cart.map((product) => (
                    
                                <section
                                key={product.id}
                                className='flex gap-9 border-b-2 border-gray-300 pb-4'
                                >
                                    <div
                                    className='flex flex-col gap-2 items-center'
                                    >
                                        <img
                                        className='w-28'
                                        src={product.cover} alt={product.title} />
                                
                                        <strong
                                        className='text-blue-700 text-xl font-bold'
                                        >{product.price.toLocaleString('en-GB' , {
                                            style:'currency',
                                            currency: 'EUR'
                                        })}</strong>
                                    </div>
                                    <div
                                    className='flex flex-col gap-3 justify-end'
                                    >
                                        <h2><strong>Title: </strong>{product.title}</h2>
                                        <div
                                        className='max-w-fit flex items-center justify-center gap-2 p-2 border-2 border-slate-600 '
                                        >
                                            <button
                                            onClick={() => handleDecreaseItemCart(product)}
                                            >
                                                <FiMinus size={16} color='#121212'/>
                                            </button>
                                                {product.amount}
                                            <button
                                                onClick={() => addItem(product)}                                            
                                            >
                                                <FiPlus size={16} color='#121212'/>
                                            </button>
                                        </div>
                                        <button
                                        onClick={() => handleRemoveItem(product)}
                                        className='max-w-fit'
                                        >Remove</button>
                                    </div>
                                </section>
                    
                    
                    
                ))
            }
            </div>

           {
            cart.length !== 0 &&(
                <section
                className='w-full max-w-md max-h-fit flex flex-col gap-3 items-center p-11 bg-slate-100 rounded'
                >
                    <div
                    className='w-full flex justify-between'
                    >
                        <span>Subtotal</span>
                        <strong
                        className='text-blue-700 text-xl font-bold'
                        >{total}</strong>
                    </div>
                    <Link to='/'
                    className='w-full flex items-center justify-center bg-transparent border-2 border-slate-800 my-3 p-4 text-slate-800 font-medium rounded'
                    >
                        Continue shopping
                    </Link>

                    <button
                    onClick={handlePayment}
                    className='w-full flex items-center justify-center bg-blue-700 hover:bg-blue-400 my-3 p-4 text-white font-medium rounded'
                    >
                        Pay Now
                    </button>
                </section>
            )
           }
            </div>
                  
        </div>
    )
}