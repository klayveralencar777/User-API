import UserServices from "../services/UserServices.js";

const createUser = async(req, res) => {
        try {
            const user = await UserServices.createUsers(req.body);
            res.status(201).json(user);    

        } catch(error){
            res.status(400).json({error: error.message});
        }

}

const getUser = async(req, res) => {
    try{
        const users = await UserServices.getUsers();
        res.status(200).json(users);

    }catch(error){
        res.status(404).json({error: error.message});
    }

}


export default {createUser, getUser };
