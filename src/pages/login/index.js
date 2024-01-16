import { useState } from "react"
import axios from "axios"
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (email, password) => {
        const res = await axios.post('http://localhost:8080/login', {
            email: email,
            password: password
        });

        if (res.status === 200) {
            alert(res.data.message)
            localStorage.setItem('user', true)
        }
        router.push('/')
    }

    const changeRoute = () => {
        router.push('/signup')
    }

    return (
        <div>
            <h1>login up</h1>
            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            <button onClick={() => loginUser(email, password)}>Login</button>
            <button onClick={() => changeRoute()}>Sign up</button>
        </div>
    )
}

export default Login