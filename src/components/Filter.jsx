import Companies from "./companies/Companies";
import Services from "./services/Services";
import {Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";

const Filter = (props) => {

    const [search,setSearch] = useState({})

    const handleChange = (e) => {
        setSearch(
            {
                ...search,
                [e.target.name]:e.target.value
            }
        )
    }

    useEffect(() => {
        props.criteria(search)
    }, [search])

    const resetFilter = () => {
        setSearch({})
    }

    return (
        <div className="input-group">
            <div><label>Duomenu filtravimas:</label></div>
            <Form.Select name="company" defaultValue='--Pasirinkite imone--' onChange={handleChange}>
                <option disabled>--Pasirinkite imone--</option>
                <Companies/>
            </Form.Select>
            <div><label>Duomenu filtravimas:</label></div>
            <Form.Select name="service" defaultValue='--Pasirinkite paslauga--' onChange={handleChange}>
                <option disabled>--Pasirinkite paslauga--</option>
                <Services/>
            </Form.Select>
            <div>
                {Object.keys(search).length && <Button variant='primary' type='reset' onClick={resetFilter}>Valyti</Button>}
            </div>
        </div>
    )
}

export default Filter