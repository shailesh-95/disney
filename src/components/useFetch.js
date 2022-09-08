import { useEffect, useState } from "react";

const useFetch = (request) => 

{
    const [data, setData] = useState( null );
    const [pending, setpending] = useState(true);
    const [error, seterror] = useState(null);
    
   useEffect( ()=>{

     setTimeout(()=>{

         fetch(request)
         .then((response)=>{
           if (response.ok===false) 
           {
              throw Error("Data not found, please try for different resorse") 
           }
           else
           {
               return ( response.json() )
           }
             })

         .then((data)=>{ setData (data); setpending(false)})
         .catch((error)=>{ seterror(error.message); setpending(false)})

     }, 1000 )

    } , [] )

    return {data , pending , error};
}
 
export default useFetch;