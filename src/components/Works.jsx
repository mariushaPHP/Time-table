import React, {useEffect, useState} from "react";
import AddWork from "./AddWork";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import WorkTable from "./WorkTable";
import Filter from "./Filter";
import * as service from "./services/worksServices";

const Works  = (props)=>{
    const [addWork,setAddWork] = useState(false)
    const[works, setWorks] = useState([])
    const [filterCriteria, setFilterCriteria] = useState({})

    const closeFormHandler = ()=>{
        setAddWork(false)
    }

    useEffect(() => {
        service.getAllWorks((works) => setWorks(works))
    },[])


    const onSaveWorkHandler = (data) => {
        service.addWork(data)
        setWorks((prevData) => {
            return [data, ...prevData]
        })
        props.status(true)
        closeFormHandler()
    }

    //console.log(works)
    const filterHandler = (criteria) => {
        setFilterCriteria(criteria)
    }

    console.log(filterCriteria)

    const filteredItems = (filterCriteria) => {
        const filterKeys = Object.keys(filterCriteria)
        console.log('filterKeys ', filterKeys)

        return works.filter(eachObj => {
            return filterKeys.every(eachKey => {
                if(!filterCriteria[eachKey].length){
                    return true  // jeigu nera reiksmiu filtre, filtras ignoruojamas
                }
                return filterCriteria[eachKey].includes(eachObj[eachKey])
            })
        })
    }

    return(
        <>
            {(addWork) && <AddWork onSave={onSaveWorkHandler}/>}
        <Card>
            <Card.Header>
                <Card.Header>{(addWork)?
                    <Button className="btn btn-danger" onClick={closeFormHandler}>Atšaukti</Button>:
                    <Button className="btn btn-primary" onClick={()=>{setAddWork(true)}}>Pridėti</Button>}
                </Card.Header>
            </Card.Header>
            <Card.Header><h3>Darbų sąrašas:</h3></Card.Header>
            <Card.Body>
                <Card.Header>
                    <Filter criteria={filterHandler}/>

                </Card.Header>
                <WorkTable works={filteredItems(filterCriteria)}/>

            </Card.Body>
        </Card>
        </>
    )
}

export default Works