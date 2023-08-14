import React, { useEffect, useState } from 'react'
import { getRick } from '../fetch/getRick'

export const useFetchRick = (search) => {

  const [data, setData] = useState([])

  // console.log(data)
  const render = async () => {
    const newData = await getRick(search)
    setData(newData)
  }

  useEffect(() => {
    render()
  }, [])

  return {
    arreglo: data
  }
}
