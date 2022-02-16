import React, {useState } from 'react';
import './Home.css';
import Button from './Button';
import axios from 'axios';
import QRcode from 'qrcode';
import { useEffect} from 'react';





const Home = ({text}) => {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);


  
  const handleClick = (e) => {
    setLoading(true);
    axios.get('https://randomuser.me/api/')
    .then((response) => {
      // console.log(response.data.results);
      setUserData(response.data.results);
    }).catch((err) => {
      console.log(err);
      setLoading(true);
    }).finally(() => {
      setLoading(false);
      setActiveUser(true);
    })
  }


  return (
    <>
    <div className='main'>
    <Button isActive={activeUser} clicked={handleClick}/>
    {loading ? (<p>Loading...</p>) : (
      <div className='app__user'>
        {userData.map((user, index) => {
            return (
              <>
                <img src={user.picture.large}  alt='user'/>
                <p >{user.name.first} {user.name.last}</p>
                <p>{user.email}</p>
                <p>{user.location.city}</p>
                </>
            )
        })}
        
      </div>
    )}
    </div>
    </>
  )
}

export default Home