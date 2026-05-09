import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  const getData =async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
   setUserData(response.data);
  }



  useEffect(function(){
    getData()
  },[index])

let printUserData = Array(10).fill(0).map((_, idx) => {
  return (
    <div
      key={idx}
      className='animate-pulse bg-white/10 rounded-2xl p-2'
    >
      <div className='h-40 w-44 bg-gray-700 rounded-xl'></div>

      <div className='h-4 w-32 bg-gray-700 rounded mt-3'></div>

      <div className='h-3 w-20 bg-gray-700 rounded mt-2'></div>
    </div>
  )
})




if (userData.length>0) {
  printUserData=userData.map(function(elem,idx){
    
    return <div key={idx}>
      <Card elem={elem} />
      </div>
  })
}

  return (
    <div className= ' bg-gradient-to-br from-black via-gray-900 to-black overflow-auto h-screen p-4  text-white'>
      <div className='text-center mb-8'>
  
  <h1 className='bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent text-5xl font-bold '>
    React Gallery
  </h1>

  <p className='text-gray-400 mt-2 text-sm'>
    Beautiful random images powered by API
  </p>

</div>
        <div className='flex justify-center flex-wrap gap-5 p-2'>
         {printUserData}
        </div>
         
      <div className='flex justify-center gap-6 items-center p-4'>
          <button
          style={{opacity:index == 1 ? 0.6 : 1}}
           className='bg-amber-400  hover:bg-amber-300 transition duration-300 text-black  text-sm cursor-pointer active:scale-95 rounded-full px-5 py-2 font-semibold shadow-lg'
           onClick={()=>{
                  
            if(index>1){
              setIndex(index-1)

              setUserData([])
          
            }
           }}
           >
            Prev
            </button>
            <h4>Page {index}</h4>
          < button 
          className='bg-amber-400 hover:bg-amber-300 transition duration-300 text-black text-sm cursor-pointer active:scale-95 rounded-full px-5 py-2 font-semibold shadow-lg'
          onClick={()=>{
            setUserData([])
            setIndex(index+1)

           }}
          >
            Next
            </button>
        </div>
    </div>
  )
}
        
    
export default App
