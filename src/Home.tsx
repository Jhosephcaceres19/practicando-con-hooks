import { useState } from "react"


const Home=() =>{
    
    const [nombre, setNombre] = useState("")
    const [num, setNum] = useState(0)

   
    return(
        <div>
            <h1>private</h1>
            <hr />
            <h1>{num}</h1>
            <button onClick={() => setNum(num+1)}>+</button>
            
            <button onClick={() => setNombre("jose")}>mostrar</button>
            <h1>{nombre}</h1>

            
        </div>
    )
}
export default Home