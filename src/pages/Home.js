import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./css.css"
import { db } from "../firebase"
import SideBar from "../components/SideBar";
import Data from "../components/Data";
import HomeLook from "../components/HomeLook";
const Home = () => {
    const { currentUser } = useContext(AuthContext)
    // console.log(currentUser)
    return (
        <div className="HomePage" style={{overflow:"hidden"}}>
            <span className="sidebar">
                <SideBar />
            </span>
            <span className="data" >
                <HomeLook />
            </span>
        </div>
    )
}

export default Home;