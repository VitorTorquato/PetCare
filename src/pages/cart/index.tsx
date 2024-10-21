import {FiMinus , FiPlus} from 'react-icons/fi'
import { Link } from 'react-router-dom'




export function Cart(){

    const img = 'https://sujeitoprogramador.com/wp-content/uploads/2023/06/racao1.png'

    return(
        <div 
        className="w-full max-w-7xl mx-auto"
        >
            <h1
            className="font-medium text-4xl text-center my-4"
            >Cart</h1>

                <div 
                className='w-full flex flex-col sm:flex-row items-center gap-5'
                >
                    <section
                    className='flex  flex-1 gap-9 border-b-2 border-gray-300 pb-4'
                    >
                        <div
                        className='flex flex-col gap-2 items-center'
                        >
                            <img
                            className='w-28'
                            src={img} alt="" />
                    
                            <strong
                            className='text-blue-700 text-xl font-bold'
                            >120.00</strong>
                        </div>
                        <div
                        className='flex flex-col gap-3 justify-end'
                        >
                            <h2><strong>Title: </strong>Racao x</h2>
                            <div
                            className='flex items-center justify-center gap-2 p-2 border-2 border-slate-600  '
                            >
                                <button>
                                    <FiMinus size={16} color='#121212'/>
                                </button>
                                    2
                                <button>
                                    <FiPlus size={16} color='#121212'/>
                                </button>
                            </div>
                            <button>Remove</button>
                        </div>
                    </section>
                    <section
                    className='w-full max-w-md flex flex-col gap-3 items-center p-11 bg-slate-100 rounded'
                    >
                        <div
                        className='w-full flex justify-between'
                        >
                            <span>Subtotal</span>
                            <strong
                            className='text-blue-700 text-xl font-bold'
                            >120.00</strong>
                        </div>
                        <Link to='/success'
                        className='w-full flex items-center justify-center bg-blue-700 hover:bg-blue-400 my-3 p-4 text-white font-medium rounded'
                        >
                            Pay Now
                        </Link>
                    </section>
                </div>
        </div>
    )
}