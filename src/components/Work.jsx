import {Link} from 'react-router-dom'

const Work = (props) => {



/*
    const timeFromInMin = Number(props.timeFrom.split(":")[0])*60 + Number(props.timeFrom.split(":")[1])
    const timeToInMin = Number(props.timeTo.split(":")[0])*60 + Number(props.timeTo.split(":")[1])
    let timeMin = timeToInMin - timeFromInMin
    let h = 0
    let min = 60
    while(timeMin >= min){
        timeMin -= min
        h++
    }
    const time = h.toString() + ":" + (timeMin < 10 ? "0" : "") + timeMin.toString()

     !!!!  ->   (props.timeFrom && funkcija laiko)
*/

    const getId = () => {
        props.onDelete(props.id)
    }

    return (
        <tr>
            <td>{props.date}</td>
            <td>{props.company}</td>
            <td>{props.service}</td>
            <td>{props.description}</td>
            <td>{props.timeFrom}</td>
            <td>{props.timeTo}</td>
            <td><a href="/#" onClick={getId}>Šalinti</a></td>
            <td><Link key={props.id} to={`work/update/${props.id}`}>Redaguoti</Link></td>
        </tr>
    )
}

export default Work