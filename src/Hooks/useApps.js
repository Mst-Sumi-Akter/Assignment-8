import { useEffect, useState } from 'react'
import axios from 'axios'

const useApps = () => {
  const [apps, setApps] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios('/data.json')
      .then(res => setApps(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return { apps, loading, error }
}

export default useApps
