import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FactComponent } from '../components/FactComponent'
import { FactModal } from '../components/FactModal'

const Home = () => {
  const router = useRouter()
  const [data, setData] = useState([])

  useEffect(() => {
    const isUserLoggedIn = () => {
      const isUser = localStorage.getItem('user')
      if (isUser === null || isUser === false) {
        router.replace('/login')
      }
    }
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8080/facts')
      setData(response.data)
    }
    isUserLoggedIn()
    fetchData()
  }, [])

  console.log(data)

  return (
    <div>
      <h1>FACTS</h1>
      <FactModal />
      {
        data.map((factData) => (
          <FactComponent factData={factData} />
        ))
      }
    </div>
  )
}

export default Home