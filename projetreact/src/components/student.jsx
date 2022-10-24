import Button from "./button";
import '../styles/studentstyle.css'


export default function Student (props) {
    const DisplayOnName = `Bonjour je suis ${props.name}`;
    function Click (){
        alert(DisplayOnName);
      }
    return(

        
        <div className="student_tile">
        <h2>{props.name}</h2>
        <p>{props.age} ans</p>
        <div className="pic_container">
        <img alt="avatar" src={props.avatar} className="profile_pic"/>
        </div>
        {(props.isFromri7 == false) &&(<p>Je ne suis pas chez Ri7</p>)}
        <Button onclick={Click}/>
        </div>
        )
    

}