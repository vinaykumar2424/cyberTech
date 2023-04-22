import { useLocation } from "react-router-dom";
import "./form.css"
import { useState } from "react";

const Form = (props) => {

    const [query, setQuery] = useState("")
    let allP = document.getElementsByTagName("p")
    let arrAllp = []
    for (let i = 0; i < allP.length; i++) {
        arrAllp[i] = {
            name: allP[i]?.innerHTML
        }
    }
    // console.log(arrAllp)
    const items = arrAllp;
    // console.log((arrAllp[0].name))
    const gerFilteredItems = (query, items) => {
        if (!query) {
            return items;
        }
        return items?.filter(val => val.name.includes(query))
    }
    const handleSubmitSearch = async (e) => {
        e.preventDefault();
        setQuery(e.target.value)
    }

    const filteredItems = gerFilteredItems(query, items);

    for (let i = 0; i < allP.length; i++) {
        let found = false;
        for (let j = 0; j < filteredItems?.length; j++) {
            if (allP[i].innerHTML === filteredItems[j].name) {
                found = true;
                break;
            }
        }
        if (found) {
            allP[i].style.display = "block";
        } else {
            allP[i].style.display = "none";
        }
    }


    return (
        <div style={{ overflowX: "hidden" }}>
            <div className="search">
                <form className="searchForm"  >
                    <input type="text" onChange={handleSubmitSearch} className="searchInput" placeholder="Search here..." />
                    {/* <button className="search-btn" >search</button> */}
                </form>
            </div>
            <form className="form">
                <div className="headings">
                    <div className="heading">
                        <div className="column-name">{props.data}-1</div>
                        <div className="details">
                            <p>Cinema</p>
                            <p>Theater</p>
                            <p>Art</p>
                            <p>Dance</p>
                            <p>Music</p>
                            <p>Museum</p>
                            <p>Opera</p>
                            <p>Ballet</p>
                            <p>Literature</p>
                            <p>Photography</p>
                            <p>Comedy</p>
                            <p>Tragedy</p>
                            <p>Sculpture</p>
                            <p>Exhibition</p>
                            <p>Performance</p>
                        </div>
                    </div>
                    <div className="heading">
                        <div className="column-name">{props.data}-2</div>
                        <div className="details">
                            <p>Poetry</p>
                            <p>Film</p>
                            <p>Painting</p>
                            <p>Concert</p>
                            <p>Play</p>
                            <p>Orchestra</p>
                            <p>Circus</p>
                            <p>Opera House</p>
                            <p>Choir</p>
                            <p>Gallery</p>
                            <p>Street Art</p>
                            <p>Stand-up Comedy</p>
                            <p>Improvisation</p>
                            <p>Historical Sites</p>
                            <p>Broadway</p>
                        </div>
                    </div>
                    <div className="heading">
                        <div className="column-name">{props.data}-3</div>
                        <div className="details">
                            <p>Performance Art</p>
                            <p>Classical Music</p>
                            <p>Documentary</p>
                            <p>Contemporary Dance</p>
                            <p>Street Performance</p>
                            <p>Opera Singer</p>
                            <p>Artisan</p>
                            <p>Musical Theater</p>
                            <p>Comedy Club</p>
                            <p>Symphony</p>
                            <p>Modern Art</p>
                            <p>Cabaret</p>
                            <p>Experimental Film</p>
                            <p>Cultural Festival</p>
                            <p>Jazz Music</p>
                        </div>
                    </div>
                    <div className="heading">
                        <div className="column-name">{props.data}-4</div>
                        <div className="details">
                            <p>Ballet Dancer</p>
                            <p>Theater Company</p>
                            <p>Art Deco</p>
                            <p>Indie Music</p>
                            <p>One-man Show</p>
                            <p>Art Installation</p>
                            <p>Opera House Tour</p>
                            <p>Open Mic Night</p>
                            <p>Musical Instrument</p>
                            <p>Documentary Film Festival</p>
                            <p>Art History</p>
                            <p>Musical Performance</p>
                            <p>Stand-up Comedy Special</p>
                            <p>Broadway Musical</p>
                            <p>Photography Exhibition</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Form;