
import heroImg from '../../assets/HeroImg.webp'

import {Card} from '../../components/card'
import {products} from '../../../data.json' 

export function Home(){
    
    return(
        <div
        className='bg-sky-200'
        >

        <div
        className='w-full max-w-7xl h-screen flex flex-col items-center justify-center gap-4 px-2 mx-auto md:flex-row'
        >

            <div 
            className='w-full border-4 border-slate-800 rounded-2xl p-6 mt-6 sm:p-10 md:flex-1'>
                <h1                            
                className='text-3xl text-center text-slate-800 font-bold lg:text-6xl md:text-5xl'
                >Everything that you need for your pet</h1>
            </div>
            <div className='flex-1 w-full h-64 flex items-center justify-center md:h-96 lg:h-screen overflow-hidden'>
                <img
                className='h-full object-contain'
                src={heroImg} alt="cat and dog ilustration" />
            </div>



        </div>

            <main
            className="w-full bg-slate-100 pb-16 px-2"
            >   

                <h1
                className='text-5xl font-extrabold text-center pt-12'
                >Most popular products</h1>
                <div 
                className='w-full max-w-7xl mt-0 mx-auto grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-5'
                >
                {
                    products && 

                    products.map((product) => {
                        return(
                            <Card 
                            key={product.id}
                            product={product}
                            />
                        )
                    })
                }
                </div>

            </main>
        </div>
    )
}