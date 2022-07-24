import axios from 'axios'
import { useState, useEffect } from 'react'
import BeerList from '../components/BeerList'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {

  const [beers, setBeers] = useState([])
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)

  const choosePage = (currentPage) => {
    getBeers(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=25`)
  }

  const getBeers = async (url) => {
    setLoading(true)
    console.log(url)
    const result = await axios.get(url)
    setLoading(false)
    setBeers(result.data)
  }

  const onSearch = async (e) => {

    const { value } = e.target;
    setSearchText(value)
    if (value != '') {
      getBeers(`https://api.punkapi.com/v2/beers?beer_name=${value}`)
    } else {
      getBeers(`https://api.punkapi.com/v2/beers`)
    }

  }

  useEffect(() => {

    getBeers(`https://api.punkapi.com/v2/beers`)

  }, [])

  return (
    <>
      <Header searchText={searchText} onSearch={onSearch} />
      <BeerList
        beers={beers}
        loading={loading} />
      {loading ||
        <Footer choosePage={choosePage} />
      }
    </>
  )
}
