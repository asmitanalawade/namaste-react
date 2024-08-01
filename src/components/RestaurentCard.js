import { CDN_URL } from "../utils/constant";

const RestaurentCards = (props) => {
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId,
        sla
    } = props.data.info;
    return(
        <div className='w-[200px] p-0.5 cursor-pointer rounded-md mr-7 mb-6 h-[283px] hover:p-2'>
            <img alt='res-logo' className="h-[145px] rounded-md w-[200px] mb-1.5" src={CDN_URL+ cloudinaryImageId}/>
            <h3 className="font-bold">{name}</h3>  
            <h4 className="font-bold">{avgRating} ⭐</h4>
            <h4 className="overflow-hidden text-ellipsis text-nowrap">{cuisines.join(', ')}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} min</h4>
        </div>
    )
}

export default RestaurentCards;