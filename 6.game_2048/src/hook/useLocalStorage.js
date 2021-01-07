import { useEffect, useState } from "react";

const useLocalStorage = (key, initialVlaue) => {
    const [value, setValue] = useState(initialVlaue);

    useEffect(() => {
        const valueStr = window.localStorage.getItem(key);
        
        if (valueStr) {
            setValue(Number(valueStr));
        }
    }, [key]);

    useEffect(() => {
        const prev = window.localStorage.getItem(key);
        const next = String(value);

        if (prev !== next) {
            window.localStorage.setItem(key, next);
        }
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;