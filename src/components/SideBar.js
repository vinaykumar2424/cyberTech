import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore"
import { getDoc } from "firebase/firestore";
import "./sidebarData.css"
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
const SideBar = () => {
    const { currentUser } = useContext(AuthContext);
    const [Tabs, setTabs] = useState([]);
    // let Data = [
    //     {
    //         tab: "school data for Academics"
    //     },
    //     {
    //         tab: "Cultural data"
    //     },
    //     {
    //         tab: "Games data"
    //     },
    //     {
    //         tab: "collage data"
    //     },
    // ]
    // console.log(currentUser.uid)


    // console.log((Object.entries(Tabs)).length)
    let len;
    const AddTabs = () => {
        document.getElementsByClassName("InputDiv")[0].style.display = "block"
    }
    const addTaskCompleted = async (e) => {
        e.preventDefault();
        let inputValue = e.target[0].value
        if (Tabs) {
            len = (Object.entries(Tabs)).length
        }
        else {
            len = 0;
        }
        if (len != 0) {

            for (let i = len; i <= len; i++) {
                await updateDoc(doc(db, "usersData", currentUser.uid), {
                    [i]: inputValue
                });
            }
        }
        else {
            await setDoc(doc(db, "usersData", currentUser.uid), {
                [len]: inputValue
            });
            len += 1
        }
        document.getElementsByClassName("InputDiv")[0].style.display = "none"
    }
    // set the data from firebase
    useEffect(() => {
        const getTabs = () => {
            const unsub = onSnapshot(doc(db, `usersData`, currentUser.uid), (doc) => {
                setTabs(doc.data());
            });
            return () => {
                unsub();
            };
        };
        currentUser.uid && getTabs();
    }, [currentUser.uid]);
    let Data = []
    if (Tabs) {
        for (let i = 0; i < (Object.entries(Tabs)).length; i++) {
            let tab = Object.entries(Tabs)[i]?.[0]
            let valu = Object.entries(Tabs)[i]?.[1]

            Data[i] = {
                tab: valu
            }
        }
    }


    return (
        <div className="sidebarDiv">
            <div className="newTabAddBtn" onClick={() => { signOut(auth) }} style={{ position: "absolute", top: "30px", right: "10px", float: 'right' }} >Logout</div>
            <p className="app-Name">Safe Locker</p>
            <div className="AllTabs" >
                {Data?.map((tab, index) => (
                    <Link to="data" state={tab} key={index} style={{ textDecoration: "none" }} >
                        <div className="sidebar-tabs" >
                            <div>{tab.tab}</div>
                        </div></Link>
                ))
                }
            </div>
            <div className="sidebar-tabs" onClick={AddTabs}><span style={{ fontSize: "20px" }} >+</span> Add Data</div>
            <div className="InputDiv">
                <form onSubmit={addTaskCompleted} >
                    <input type="text" className="newTabInput" placeholder="Name of New Tab" />
                    <button className="newTabAddBtn">+ Add</button>
                </form>
            </div>
        </div>
    )
}

export default SideBar;