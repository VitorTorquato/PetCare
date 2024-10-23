import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import CartProvider from "./contexts/cartContext"

import { Toaster } from 'react-hot-toast'

export function App() {
  return(
      <div>
        <CartProvider>
        <Toaster
        position='top-center'
        reverseOrder={false}
        />
          <RouterProvider router={router}/>
        </CartProvider>
      </div>
  )
}

