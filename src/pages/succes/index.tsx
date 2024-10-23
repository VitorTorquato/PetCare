import { Link } from "react-router-dom";

export function Success(){
    return(
        <div className="w-full pb-2 max-w-7xl mx-auto px-2"
        >
            <div
            className="max-w-fit  mt-10 mx-auto bg-sky-50 rounded-2xl p-14 flex flex-col items-center justify-center gap-3"
            >
                    <div
                    className="text-9xl text-green-600"
                    >
                    ✓
                    </div>
                       <h1
                       className="text-7xl"
                       >Success</h1> 
                       <p
                       className="text-center"
                       >We received your purchase request;<br/> we'll be in touch shortly!</p>

                       <Link 
                       className='bg-blue-500 my-3 p-1 px-3 text-white font-medium rounded'
                       to='/'>
                            Back to home
                       </Link>
            </div>
        </div>
    )
}