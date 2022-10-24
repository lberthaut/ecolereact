import { useState } from 'react';
import '../styles/App.css';
import Profile from '../components/profile';
import ProfilePic from '../components/profilepic';
import '../styles/cvstyle.css'
import XpPro from '../components/pro';
import Compteur from '../components/compteur';


function App() {
  const [name, setName] = useState('Ash Williams')
  const [pic, setPic] = useState('https://static.wikia.nocookie.net/the-dead-meat/images/9/9e/AshEvilDead2.jpg')
  const [age, setAge] = useState('34')
  const [job, setJob] = useState('Vendeur chez Pribas')
  const [adress, setAdress] = useState('Cabin Wood')
  const [phone, setPhone] = useState('00-435-759-103')
  const [pro, setPro] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.')

  return (
    <>
    <div className="profile_container">
    <div className="pic_container">
    <ProfilePic 
    pic={pic}
    />
    </div>
    <Profile
      name={name}
      setName={setName}
      pic={pic}
      age={age}
      job={job}
      adress={adress}
      phone={phone}
    />
    </div>
    <h2 className="xp_title">Mes experiences :</h2>
    <div  className="pro_container">
    <XpPro 
    pro={pro}
    />
    <XpPro 
    pro={pro}
    />
    <XpPro 
    pro={pro}
    />
    </div>
     <Compteur/>
    </>
  );
}

export default App;
