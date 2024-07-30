import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h2>Opps!!!</h2>
            <h1>Something went wrong !</h1>
            <p>{err.error.message}</p>
        </div>
    )
}

export default Error;