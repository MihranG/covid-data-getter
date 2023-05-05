import {EMonths} from "./types";

const baseUrl = import.meta.env.VITE_BASE_URL

export const getDataByMonth = async (month: EMonths) =>{
    try{
        console.log(11, baseUrl)
        const dataStrem = await fetch(`${baseUrl}/0${month}-21`)
        const data = await dataStrem.json()
        console.log('data', data)
    }catch (e){
        console.log(e)
    }

}
