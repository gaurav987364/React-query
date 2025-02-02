/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInfiniteQuery } from "@tanstack/react-query"
import { getInfiniteUsers } from "../api";
import { useEffect } from "react";

//pageParam means pageNumber ok;
const InfiniteScroll = () => {
  const {data,hasNextPage,fetchNextPage} = useInfiniteQuery({
    queryKey: ["infiniteUsers"],
    queryFn: getInfiniteUsers,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 10 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1
  });


  const applyInfiniteScroll =async ()=>{
    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight -1;

    if(bottom && hasNextPage){
      await fetchNextPage();
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll", applyInfiniteScroll);

    return ()=>{
      window.removeEventListener("scroll", applyInfiniteScroll);
    }
  },[hasNextPage])
  return (
    <div className=" p-5 space-y-5">
      {data?.pages?.map((page,index) => (
        <div key={index}>
          {page?.map((user:any) => (
            <div key={user.id}>
              <p>{user.login}</p>
              <img src={user.avatar_url} alt={user.login} width={50} height={50} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default InfiniteScroll