import axios from 'axios';


const usersUrl = 'http://localhost:8080';

export const getUsers = async (id) => {

    
    if(id=id){
        
        return await axios.get(`${usersUrl}/${id}`);
    }
    else{
        return await axios.get(`http://localhost:8080/?limit=5`); 

    }
}

// id = id || '';
// return await axios.get(`${usersUrl}/${id}`);



export const addUser = async (user) => {
  
   
    return await axios.post(`${usersUrl}/add`, user);
  
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}