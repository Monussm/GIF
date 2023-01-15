import { useState } from "react"
import { useEffect } from "react"

const Out=()=>{



    const [data,setData]=useState([])


    const getdetails=async()=>{

    const url="https://api.giphy.com/v1/gifs/search?api_key=B93U3Sk8NRYRvZ9BNJDYYTxrfWBeKcWH&q=woow&limit=1000&offset=500&rating=r&lang=en"
    const response=await fetch (url)
    const newdata=await response.json()
    console.log(newdata)
    setData(newdata.data)




    }




useEffect(()=>{

getdetails();


},[])
return<>
<div className="container">

</div>
{

data.map((element)=>{

return (

<>
<div className="container">
    
<video src={element.mp4} />

</div>



</>



)





})






}




</>

}
export default Out;