 import './style.css'
 import { useState, useEffect } from "react"
 

 const App = () => {
const [data, setData] = useState([]);
useEffect(()=>{
const fetchData = async () =>{
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=38eda4ed2c898e1adbeca7313af23a04');
    const datas = await res.json();
    if(datas.results && datas.results.length){
        setData(datas.results);
        console.log(datas);
    }else{
        console.log('non');
    }
}
fetchData();
}, []);



    return <>
     <section className='container'>
        {
            data.map((d)=>(
                <>
<div className='box'>
                <img 
                className='posters' 
                key={d.id} src={`https://image.tmdb.org/t/p/w500/${d.poster_path}`} 
                alt={d.title}/>
                <h1 className='title'>{d.title}</h1>
</div>
                </>
                ))

        }
     </section>
    </>     
}
export default App