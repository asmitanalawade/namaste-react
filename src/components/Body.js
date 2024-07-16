import RestaurentCards from "./RestaurentCard";
import { useState } from "react";
import resList from "../utils/mockData";


const Body = () => {
    const [restaurentList, setList] = useState(resList);

    return(
        <div className='body'>
        {/* <label className='search'>Search</label> */}
        <div className="filter">
            <button type="button" className="filter-btn" onClick={() => {
                let filteredData = restaurentList.filter((res) => res.card.card.info.avgRating > 4);
                setList(filteredData);
            }}>Top Rated Restaurant</button>
        </div>
        
        <div className='res-container'>
            {
                restaurentList.map(restaurent => (
                    <RestaurentCards key={restaurent.card.card.info.id} data={restaurent}/>
                ))
            }
            
        </div>
    </div>
    )
}

export default Body;