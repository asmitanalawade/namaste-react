import { CDN_URL } from "../utils/constant";

const RestaurentCards = (props) => {
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId,
        sla
    } = props.data.card.card.info;
    return(
        <div className='res-card' style={{
            backgroundColor: '#FFF'
        }}>
            <div className='res-logo'>
                <img alt='res-logo' src={CDN_URL+ cloudinaryImageId}/>
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} star</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} min</h4>
        </div>
    )
}

export default RestaurentCards;