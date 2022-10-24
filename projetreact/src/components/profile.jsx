import React from "react"
import Button from "./button"

export default function Profile ({name, setName, age, adress, job, phone}){
    return(
        <div className="infos_container">
            <h1 className="name">{name}</h1>
            <p className="profile_infos">{age}</p>
            <p className="profile_infos">{adress}</p>
            <p className="profile_infos">{job}</p>
            <p className="profile_infos">{phone}</p>
            <Button action={()=>setName('Evil Ash')}/>
        </div>
    )
}