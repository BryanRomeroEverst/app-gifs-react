import Category from "components/Category/Category"
import { useEffect, useState } from "react"
import getTrendingTermsService from "services/getTrendingTermsService"


function TrendigSearches(){
    const [trends, setTrends] = useState([])

    useEffect(function (){
        getTrendingTermsService()
        .then(setTrends)
    }, [])
    return <Category options={trends} name={'Trending'}/>
}

export default TrendigSearches