import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantDetails = () => {
    const {resId} = useParams();
    
    const restaurantDetails = useRestaurantDetails(resId);
    console.log(restaurantDetails)
     const restInfo = restaurantDetails?.cards[2]?.card?.card?.info;
     const resList = restaurantDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    if(!restInfo || !resList) return <Shimmer/>

    const {name, cuisines, costForTwoMessage, avgRating, totalRatingsString, sla, feeDetails} = restInfo;

    return (
        <div className="container">
            <div className="res-detail">
                <h2>{name}</h2>
                <h3>{avgRating} {totalRatingsString} | {costForTwoMessage}</h3>
                <h3 style={{color: 'orange'}}>{cuisines.join(', ')}</h3>
                <h3>{sla.minDeliveryTime} - {sla.maxDeliveryTime} min</h3>
                <p>{feeDetails.message.replace(/<\/?b>/g, '')}</p>
            </div>
            <hr/>
            <div className="restaurant-info">
                {
                    resList.map(val => (
                        <div key={val?.card?.info?.id} className="resList">
                            <div className="res-content">
                                <h2 className="res-heading">{val?.card?.info?.name}</h2>
                                <h3 className="res-heading">Rs. {val?.card?.info?.price/100 || val?.card?.info?.defaultPrice/100}</h3>
                                <h3 className="res-heading">{val?.card?.info?.ratings?.aggregatedRating?.rating}</h3>
                                <p>{val?.card?.info?.description}</p>
                            </div>
                            <div className="res-img">
                                {
                                     val?.card?.info?.imageId ? <img alt="res" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+ val?.card?.info?.imageId}/> : ''
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RestaurantDetails;