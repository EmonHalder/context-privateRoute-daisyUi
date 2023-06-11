import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";


const Home = () => {
    const {user} = useContext(UserContext);
    console.log(user);

    return (
        <div>
            <h1>name : {user&& <span>{user.name}</span>}</h1>
            
        </div>
    );
};

export default Home;