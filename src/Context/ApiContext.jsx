import { createContext, useState } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {

    const [data, setData] = useState({});
    const apiKey = import.meta.env.VITE_API_KEY;

    const aqureInformation = async (place) => {
        
        try {

            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}&aqi=yes`);
            const information = await response.json();
            setData(information);

        } catch (error) {
            console.log(error);
            alert("Something went wrong : ", error);
        }
    }

    const value = {
        aqureInformation,
        data
    }

    return (
        <ApiContext.Provider value={ value }>
            { children }
        </ApiContext.Provider>
    )
}