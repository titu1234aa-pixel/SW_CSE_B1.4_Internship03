import {useState, useEffect} from "react";

function UserListHook() {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        // Fetch users from API (backend server mimicing)
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{ //successful fetch
                if(!res.ok){
                    throw new Error("Failed to fetch data");                    
                }
                return res.json()
            })
            .then((data)=>{
                setUsers(data);
                setError(null);
                setLoading(false);
            })
            .catch((err)=>{ //Unsuccessful data fetch
                setError(err.message);
                setLoading(false);
            });
},[]); //empty dependency array
if (loading) {
    return <div>Loading users...</div>
}
if (error) {
    return <div>Error:{error}...</div>
}
return(
    <> 
    <h3>useEffect example</h3>
    <ul>
        {/* map() */}
        {users.map((user)=>(
            <li key={user.id}>
                {user.name}'s email id is:  {user.email}
            </li>
        ))}
    </ul>
    </>
);
}
export default UserListHook;