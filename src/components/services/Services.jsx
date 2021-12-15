import React from "react";
import services from "../../data/services";
import Service from "./Service";


const Services = ()=>{

    return(
        <>
            {services.map((c)=><Service key={c.id} company={c.service}/>)}
        </>

    )

}




export default Services