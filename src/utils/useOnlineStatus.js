import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=> {
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        });

        window.addEventListener('online', () => {
            setOnlineStatus(true);
        });
    });

    return onlineStatus;
}

export default useOnlineStatus;