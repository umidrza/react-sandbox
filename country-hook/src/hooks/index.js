import { useState, useEffect } from "react"
import axios from 'axios'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

export const useCountry = (name) => {
  const [country, setCountry] = useState(null)
  const COUNTRY_API_URL = 'https://studies.cs.helsinki.fi/restcountries'

  useEffect(() => {
    if (!name) return;
    axios.get(`${COUNTRY_API_URL}/api/name/${name}`).then((response) => {
      setCountry(response.data)
      console.log(response.data)
    })
  }, [name])

  return country
}