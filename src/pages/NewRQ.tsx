import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../api"

interface User {
    id: number;
    name: string;
}
const NewRQ = () => {
    const {data, isLoading, isError,error} = useQuery({
        queryKey:["users"],
        queryFn:getUsers,
        // gcTime:1000*60*5, (garbage collection time for cache)
        // staleTime: 20000, // 20 seconds
        // refetchInterval: 1000, // 10 seconds
        // refetchIntervalInBackground:true,
    });
  return (
    <div className=" w-full h-full flex justify-center p-2">
        {isLoading && <div>Loading...</div>}
        {isError && (
            <div className=" text-red-500 text-xs">
                Error fetching users: {error.message}
            </div>
        )}
        {!isLoading && data && (
            <div>
                {data.map((user:User) => <div key={user.id} className=" border-b text-center">
                {user.name}</div>)}
            </div>
        )}   {/* Displaying users */}
    </div>
  )
}

export default NewRQ