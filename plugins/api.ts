export default defineNuxtPlugin( nuxtApp => {
    nuxtApp.provide('api',{
        getUser : async () => {
            const result = await fetch('/api/user');
            return await result.json();
        },
        getUserById : async ( id : number ) => {
            const result = await fetch(`/api/user/${id}`);
            return await result.json();
        },
        createUser : async (
            user : {
                username : string,
                password : string,
                fullname : string,
                role_id : number,
                status : number
            }
        ) => {
            const result = await fetch('/api/user',{
                method : "POST",
                headers : { 'Content-type' : 'application/json' },
                body : JSON.stringify(user)
            });
            return await result.json();
        },
        updateUser :async (id : number, user : { username : string, password : string, fullname : string }) => {
            const result = await fetch(`/api/user/${id}`,{
                method : "PUT",
                headers : { "Content-type" : "application/json" },
                body : JSON.stringify(user)
            });
            return await result.json();
        },
        deleteUser :async (id : number) => {
            const result = await fetch(`/api/user/${id}`,{
                method : "DELETE"
            });
            return await result.json();
        }
    })
})