import axios from 'axios';
import { useState, useEffect } from 'react';



//custom Hook
export const useDataFetch = (initId, initCategory, initDate) => {
  const [category, setCategory] = useState(initCategory);
  const [id, setId] = useState(initId);
  const [data, setData] = useState(initDate);
  const [error, setError] = useState(null)
  let baseUrl = `https://swapi.dev/api`
  let url = `/${category}/${id}`

  useEffect(() => {

    axios(baseUrl + url)
      .then(res => setData(res.data))
      .catch(error => setError(error))
  }, [baseUrl, url])

  return [id, setId, category, setCategory, data, setData];
}



