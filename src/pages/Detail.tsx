import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom'
import { getUsersInfo } from '../api';

const Detail = () => {
    const params = useParams();
    const navigate = useNavigate();


    const {data,isLoading,isError,error} = useQuery({
        queryKey:["userDetails",params.id],
        queryFn: ()=>getUsersInfo(Number(params.id)),
    });

    const goBack = ()=>{
        navigate(-1);
    }
  return (
    <div className=' w-full h-full flex items-center justify-center flex-col'>
        Detail of the User : {" "}
        {isLoading ? (
            <div>Loading...</div>
        ) : (
           <>
            <div className=' w-60 h-28 border bg-slate-800 rounded flex items-center justify-center flex-col'>
                <span>Id : {data.id}</span>
                <span>Name : {data.name}</span>
            </div>
           </>
        )}
        {isError && <span className=' text-red-500 text-sm'>No User Found : {error.name}</span>}
        <button onClick={goBack} className=' px-4 py-1 border mt-2 rounded-lg bg-slate-800'>Back</button>
    </div>
  )
}

export default Detail