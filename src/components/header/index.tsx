import { FiShoppingCart , FiSearch} from "react-icons/fi";

import { Link } from "react-router-dom";

export function Header(){
    return(

        <header 
        className="bg-slate-300 w-full  flex items-center justify-center  py-9 px-2 mt-0 mx-auto"
        >
            <div
            className="w-full max-w-7xl items-center flex justify-between gap-12 mx-auto"
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

                <div className="flex-1 flex items-center gap-2 h-12 rounded-lg py-2 px-4 bg-slate-50">

                    <FiSearch size={24} color="#121212"/>
                    <input 
                    className="border-none outline-none bg-transparent"
                    placeholder="Search your pet food"
                    type="text" />
                </div>
                
                <Link to='/cart'>
                
                <button>
                    <FiShoppingCart size={35} color="#121212"/>
                </button>
                </Link>
            </div>

            
            

        </header>

    )
    
}