import RestaurentCards from "./RestaurentCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [restaurentList, setList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filterrdRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData=async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
 
        setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus) return <h1>Look like you are offline!! Please check your netwok conncetion.</h1>

    // Conditional rendering
    return restaurentList.length === 0 ? (<Shimmer/>) : (
        <div className='p-2.5'>
            <div className="flex mb-9">
                <div className="search-box">
                    <input type="text" className="border border-solid border-slate-300 p-1.5" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="ml-2 bg-blue-300 rounded-md p-1.5" onClick={() => {
                        let data = restaurentList.filter((val) => val.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(data);
                    }}>Search</button>
                </div>
                <button type="button" className="bg-green-200 rounded-md ml-7 p-1.5" onClick={() => {
                    let filteredData = restaurentList.filter((res) => res.info.avgRating > 4.1);
                    setList(filteredData);
                }}>Top Rated Restaurant</button>
            </div>
            
            <div className='flex flex-wrap p-3'>
                {
                    filterrdRestaurant.map(restaurent => (
                        <Link key={restaurent.info.id} to={'/restaurant/' + restaurent.info.id}>
                            <RestaurentCards data={restaurent}/>
                        </Link>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Body;