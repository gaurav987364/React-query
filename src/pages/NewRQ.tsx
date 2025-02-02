import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteUserName, getUsers, updateUserName } from "../api"
import { Link } from "react-router-dom";

interface User {
    id: number;
    name: string;
}
const NewRQ = () => {
    const queryClient = useQueryClient();
    
    const {data, isLoading, isError,error} = useQuery({
        queryKey:["users",],
        queryFn:getUsers,
        // gcTime:1000*60*5, (garbage collection time for cache)
        // staleTime: 20000, // 20 seconds
        // refetchInterval: 1000, // 10 seconds
        // refetchIntervalInBackground:true,
    });

    
    //! Mutations in React-Query;
    const {mutate:deleteMutations,
        error:e,
        failureCount,
        isError:ie,
        isPending,
        isSuccess, 
} = useMutation({
        mutationFn: (id: number) => deleteUserName(id), //? is step tak api me chnages done ho jate hai but ui ke liye below part is important
        onSuccess(data,id:number) {
            queryClient.setQueryData<User[]>(["users"], (elem) => {
                return elem?.filter((user) => user.id !== id);
            });
        },
    });
    // useMutation Hook returns a tuple containing the mutation function, the mutation context, the mutation result, error, failure count, failure reason, isError, isIdle, isPaused, isPending, isSuccess, mutateAsync, reset, status, submittedAt, and variables.

    //! Update Mutations;
    const {mutate:updateMutations, isPending:coming} = useMutation({
        mutationFn:(id:number)=> updateUserName(id),
        onSuccess(data, id:number) {
            console.log(data); // this data is coming from the our own action.
            queryClient.setQueryData<User[]>(["users"],(allUsers)=>{
                return allUsers?.map((u)=> u.id === id ? { ...u, name: "Gaurav Sharma" } : u );
            })
        },
    })
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
                {data.map((user:User) => (
                    <div key={user.id} className=" flex items-center justify-between gap-x-96">
                        <Link  to={`/detail/${user.id}`}>
                          <div className="border-b text-center">{coming ? "Coming..." : user.name}</div>
                        </Link>
                        <div>
                            <span>{isPending && "Loading..."}</span>
                            <span>{isSuccess && "Deleted"}</span>
                            <span>{ie && "Error Deleting"}</span>
                            <span>{e && "Error Deleting"}</span>
                            <span>{failureCount > 0 && "Failed"}</span>
                            <button onClick={()=> deleteMutations(user.id)}>❌</button>
                            <button onClick={()=>updateMutations(user.id)}>📝</button>
                        </div>
                    </div>
                )
                )}
            </div>
        )}   {/* Displaying users */}
    </div>
  )
}

export default NewRQ;

