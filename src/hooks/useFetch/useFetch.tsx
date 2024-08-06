import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch(url){
    const [resultData, setResultData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=>
    {
        fetchData()
    },[])

    const fetchData = async() => {
        try{
            const {data} = await axios.get(url)
            setResultData(data)
            setLoading(false)
        }
        catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }

    return {resultData,loading, error}
}