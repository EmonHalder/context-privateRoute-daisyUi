import  { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

const About = () => {
const {user} = useContext(UserContext);
    return (
        <div>
            <h1>Name : {user&&<span>{user.name}</span>}</h1>
        </div>
    );
};

export default About;