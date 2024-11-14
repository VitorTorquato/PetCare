import {BsCartPlus} from 'react-icons/bs'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

import  toast  from 'react-hot-toast';


export interface ProductProps{
    
        id:number;
        cover:string;
        title:string;
        price:number;
        description?:string

}

export function Card(product:ProductProps){

    const {addItem} = useContext(CartContext);


    function handleItemCart(product:ProductProps){
        toast.success('Product added succesfully',{
            style:{
                borderRadius: 10,
                backgroundColor:'#121212',
                color:'#FFF'
            }
        })
        addItem(product)
    }

    return(
            
            <div 
            className='flex flex-col w-full  bg-sky-200 rounded-t-md rounded-b-2xl mt-12'
            >
                    <div 
                    className='border-b-2 border-slate-600 overflow-hidden'
                    >
                        <img
                        className='object-cover  hover:scale-110'
                        src={product.cover} alt={product.title} />
                    </div>
                
                

                <div
                className='flex flex-col  gap-3 px-2 py-2 mt-3 '
                >
                    <p
                    className='font-medium  text-slate-700 text-center'
                    >{product.title}</p>
                    <div
                    className='flex items-center justify-center gap-4'
                    >
                        <strong
                        className='text-blue-700 text-xl font-bold'
                        >{product.price.toLocaleString('en-GB' , {
                            style:'currency',
                            currency: 'EUR'
                        })}</strong>
                        <button
                        
                        onClick={() => handleItemCart(product)}
                        >
                            <BsCartPlus size={24} color='#121212'/>
                        </button>
                    </div>
                </div>
            </div>
    )
}