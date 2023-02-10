import {BiMap} from "react-icons/bi"
import "./Main.css"
export default function Main(props)
{
    return(
        <div className="full">
        <div className="container">
            <view className="vertical"></view>
            <img src={props.item.imageUrl} alt="not loaded" className="locimg" />
            <div className="inside">
            <p className="place"><BiMap className="logo"/> {props.item.title}</p>
            <h3 className="location">{props.item.location}</h3>
            <p className="date">{props.item.startDate} - {props.item.endDate}</p>
            <p className="desc">{props.item.description}</p>
           </div>
           </div>
           <hr className="line" />
           </div>
    )
}