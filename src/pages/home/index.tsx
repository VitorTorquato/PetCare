
import heroImg from '../../assets/HeroImg.webp'

import {Card} from '../../components/card'
import {products} from '../../../data.json' 

export function Home(){
    
    return(
        <div
        className='bg-sky-200'
        >

        <div
        className='w-full max-w-7xl h-screen flex items-center justify-center lg:flex-row md:flex-row sm:flex-col'
        >

            <div className='flex-1 w-56 h-screen overflow-hidden'>
                <img
                className='w-full h-full object-contain'
                src={heroImg} alt="cat and dog ilustration" />
            </div>


            <div 
            className='flex-1 w-full  border-4 border-slate-800 rounded-2xl p-16'
            >
                <h1 
                className='text-6xl text-center text-slate-800 font-bold z-40'
                >Everything that you need for your pet</h1>
            </div>

        </div>

            <main
            className="w-full bg-slate-100 pb-16 px-2"
            >   

                <h1
                className='text-5xl font-extrabold text-center pt-12'
                >Most popular products</h1>
                <div 
                className='w-full max-w-7xl mt-0 mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5'
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