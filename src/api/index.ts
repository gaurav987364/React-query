const baseURL = `https://jsonplaceholder.typicode.com`;


export async function getAlbums(){
    const response = await fetch(`${baseURL}/albums`);
    const result = await response.json();
    return result;
};

export async function getUsers(){
    const response = await fetch(`${baseURL}/users`);
    const result = await response.json();
    return result;
};
export async function getUsersInfo(id:number){
    const response = await fetch(`${baseURL}/users/${id}`);
    const result = await response.json();
    return result;
};


export async function deleteUserName(id:number){
    await fetch(`${baseURL}/users/${id}`, {
        method: 'DELETE',
    });
};

export async function updateUserName(id:number){
    await fetch(`${baseURL}/users/${id}`, {
        method: 'PATCH', // or PATCH (pur for all data, patch for one user)
    })
};


//Infinite scroll function;
export const getInfiniteUsers = async ({pageParam = 1})=>{
    const response = await fetch(`https://api.github.com/users?per_page=10&page=${pageParam}`);
    const result = await response.json();
    return result;
};