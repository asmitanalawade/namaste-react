import { ShimmerThumbnail } from "react-shimmer-effects";

const Shimmer = () => {
    const list = [1,2,3,4,5,6,7,8];
    return (
        <div className="mt-2 flex flex-wrap  w-[78%] m-auto">
        {
            list.map((index) => (
                <ShimmerThumbnail key={index} className="mr-7 mb-6 rounded-lg" height={300} width={200} rounded />
                // <div className="shimmer-card" key={index}></div>
            ))
        }
        </div>
    )
}

export default Shimmer;