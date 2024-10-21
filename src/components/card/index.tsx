import {BsCartPlus} from 'react-icons/bs'


type ProductProps = {
    product :{
        id:number;
        cover:string;
        title:string;
        price:number;
        description:string
    }
}

export function Card({product}:ProductProps){
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
                        <button>
                            <BsCartPlus size={24} color='#121212'/>
                        </button>
                    </div>
                </div>
            </div>
    )
}