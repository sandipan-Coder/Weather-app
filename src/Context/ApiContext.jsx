import { createContext, useState } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {

    const [data, setData] = useState({});

    const aqureInformation = async (place) => {
        
        try {

            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f285f3c1a91e49a891c185747251707&q=${place}&aqi=yes`);
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