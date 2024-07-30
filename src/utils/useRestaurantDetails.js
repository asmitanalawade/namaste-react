import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantDetails = (resId) => {
    const [restaurentInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const details = await fetch(MENU_API + resId);
        const jsonData = await details.json();
        setRestaurantInfo(jsonData?.data);
    }

    return (restaurentInfo);
}

export default useRestaurantDetails;