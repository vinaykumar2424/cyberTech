import { Link, useLocation } from "react-router-dom";
import "./data.css"
import Form from "./Form";
const Data = () => {
    const location = useLocation();
    const propsData = location.state;
    const prop = propsData?.tab;
    return (
        <div className="Data">
            <div className="add-details-btn">
                <span className="tabNameDetails">Safe Locker</span>
            </div>
            <div>
                <Form data = {prop}/>
            </div>
        </div>
    )
}

export default Data;