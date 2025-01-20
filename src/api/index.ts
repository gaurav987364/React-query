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
