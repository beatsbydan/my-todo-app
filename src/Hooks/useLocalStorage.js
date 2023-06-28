import { useEffect, useState } from "react";
const getLocalStorage = (key,defaultVal) => {
    const initialVal = JSON.parse(localStorage.getItem(key))
    return initialVal || defaultVal;
}
const useLocalStorage = (key, defaultVal) => {
    const [val,setVal] = useState(()=>{
        return getLocalStorage(key,defaultVal)
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(val))
    },[key, val])
    return[val,setVal]
}
export default useLocalStorage;