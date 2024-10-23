import { Link } from "react-router-dom";

export function NotFound(){
    return(
        <div
         className='w-full max-w-7xl mt-28 flex flex-col items-center justify-center gap-4 px-2 mx-auto  '
        >
            <h1 
            className="text-7xl font-bold"
            >404</h1>
            <p>Page not found</p>
            <Link 
            className='bg-blue-500 my-3 p-1 px-3 text-white font-medium rounded'
            to='/'>
                Back to home
            </Link>

        </div>
    )
}