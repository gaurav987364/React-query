import { useEffect, useState } from "react"
import { getAlbums } from "../api";

const Old = () => {
    const [albums,setAlbums] = useState([]);
    // we do not handel loading and error state for now but they are important
    const getData = async ()=>{
        try {
            const res = await getAlbums();
            setAlbums(res);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div className=" overflow-hidden w-full h-full overflow-y-scroll">
        <h2>This is old way of fetching data.</h2>
        {albums?.map((album)=>{
            const {id,title} = album;
            return( 
                <div 
                    key={id} 
                    className=" border-b border-gray-700 text-center text-sm p-2"
                >
                        {title}
                </div>
            )
        })}
    </div>
  )
}

export default Old;