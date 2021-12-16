import {Card} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {FloatingLabel} from "react-bootstrap";
import { BsFillArchiveFill } from "react-icons/bs";
import Companies from "./companies/Companies";
import Services from "./services/Services";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as service from './services/worksServices'
import {Link} from "react-router-dom";
import data from "bootstrap/js/src/dom/data";

const AddWork = (props)=>{

    const {id} = useParams()

    const [items, setItems] = useState({
        date: '',
        company: '--Pasirinkite imone--',
        service: '--Pasirinkite paslauga--',
        description: '',
        timeFrom: '',
        timeTo: ''
    })

    useEffect(()=>{
        id && service.getWorkById(item => setItems(item), id)
    }, [id])

    const handleChange = (e) => {
        setItems(
            {
                ...items,
                [e.target.name]:e.target.value
            }
        )
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.onSave(items)
    }

    const updateHandler = ()=> {
        service.updateWork(id, items)
    }

    console.log(id)

    return(
       <>
           <Card>
               <Card.Header>Pridėkite atliktą darbą<BsFillArchiveFill/></Card.Header>
               <Card.Body>
                   <Form onSubmit={submitHandler}>
                       <Form.Group className="mb-3">
                           <Form.Label>Pasirinkite datą:</Form.Label>
                           <Form.Control type="date" name='date' value={items.date} onChange={handleChange}/>
                       </Form.Group>
                       <Form.Group className="mb-3">
                           <FloatingLabel label="Pasirinkite įmonę">
                               <Form.Select name='company' value={items.company} onChange={handleChange}>
                                   <option disabled>--Pasirinkite imone--</option>
                                    <Companies/>
                               </Form.Select>
                           </FloatingLabel>
                       </Form.Group>
                       <Form.Group className="mb-3">
                           <FloatingLabel label="Pasirinkite suteiktą paslaugą">
                               <Form.Select name='service' value={items.service} onChange={handleChange}>
                                   <option disabled>--Pasirinkite paslauga--</option>
                                    <Services/>
                               </Form.Select>
                           </FloatingLabel>
                       </Form.Group>
                       <Form.Group className="mb-3">
                           <FloatingLabel controlId="floatingTextarea2" label="Atlikto darbo aprašyma">
                               <Form.Control
                                   as="textarea"
                                   placeholder="Atlikto darbo aprašymas"
                                   style={{ height: '100px' }}
                                   name="description"
                                   value={items.description}
                                   onChange={handleChange}
                               />
                           </FloatingLabel>
                       </Form.Group>
                       <Form.Group className="mb-3">
                           <Form.Label>Nuo:</Form.Label>
                           <Form.Control type="time" name='timeFrom' value={items.timeFrom} onChange={handleChange}/>
                       </Form.Group>
                       <Form.Group className="mb-3">
                           <Form.Label>Iki:</Form.Label>
                           <Form.Control type="time" placeholder="Enter email" name='timeTo' value={items.timeTo} onChange={handleChange}/>
                       </Form.Group>
                       {(id)?
                           <Link variant="primary" type="button" className='btn btn-primary' onClick={updateHandler} to='/'>
                                Atnaujinti
                           </Link>
                           :
                           <Button variant="primary" type="submit">
                               Saugoti
                           </Button>
                       }

                   </Form>
               </Card.Body>
           </Card>
           </>
    )
}

export default AddWork