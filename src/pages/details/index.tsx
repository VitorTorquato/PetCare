import { useEffect, useState, useContext} from "react"
import { CartContext } from "../../contexts/cartContext"
import { ProductProps } from "../../components/card"
import { api } from "../../services/api"
import { useParams , useNavigate} from "react-router-dom"


import toast from "react-hot-toast"


export function Details(){

    const {addItem} = useContext(CartContext);

    const [product,setProduct] = useState<ProductProps>()

    const navigate = useNavigate();

    function handleItemCart(product:ProductProps){
        toast.success('Product added succesfully',{
            style:{
                borderRadius: 10,
                backgroundColor:'#121212',
                color:'#FFF'
            }
        })
        addItem(product)
        navigate('/cart')
    }

    const {id} = useParams();


    useEffect(() => {
            async function getData(){
                const response = await api.get(`/products/${id}`)

                setProduct(response.data);
            }

            getData()
    } , [])

    return(

        <div 
        className='bg-white'>
            <main >
              
            {
                product && (
                    
                    <section
                    className='w-full max-w-7xl h-screen flex flex-col items-center sm:flex-row gap-4 py-9 px-2 mx-auto md:flex-row'>
                        <div>
                            <img 
                            className="w-full max-w-3xl"
                            src={product.cover} alt={product.title} />
                        </div>

                        <div
                        className="w-full max-w-3xl flex flex-col gap-3"
                        >
                            <h1
                            className="text-2xl  sm:text-5xl text-center font-bold sm:text-start"
                            >{product?.title}</h1>

                            <p
                            className="font-medium text-center sm:text-start"
                            >{product?.description}</p>

                        <strong
                       className='text-blue-700 text-4xl font-bold text-center sm:text-start'
                        >{product?.price.toLocaleString('en-GB' , {
                        style:'currency',
                        currency:'EUR'
                        })}</strong>

                        <button
                        
                          className='w-full flex items-center justify-center  bg-transparent border-2 border-slate-800 my-3 p-4 text-slate-800 font-bold rounded'
                          onClick={() => handleItemCart(product)}
                        >
                        Add to cart
                        </button>

                        

                        </div>

                    </section>

                    
                )
            }
            </main>
        </div>
    )
}


{/* <div>
<img 
className="w-full max-w-md"
src={product?.cover} alt={product?.title} />
</div>

<div>
<h1>{product?.title}</h1>

<p>{product?.description}</p>

<span>Quantity: </span>
 <div
 className='max-w-fit flex items-center justify-center gap-2 p-2 border-2 border-slate-600 '
 >
 <button
 onClick={() => handleDecreaseItemCart(product)}
 >
 <FiMinus size={16} color='#121212'/>
    </button>
 {cartAmount}
<button
onClick={() => addItem(product)}                                            
>
<FiPlus size={16} color='#121212'/>
</button>
</div>

<strong>{product?.price.toLocaleString('en-GB' , {
    style:'currency',
    currency:'EUR'
})}</strong>

<Link to='/cart'>
    Add to cart
</Link>

</div> */}