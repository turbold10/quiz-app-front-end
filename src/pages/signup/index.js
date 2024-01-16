import { useState } from "react"
import axios from "axios"
import { useRouter } from 'next/router'

const SignUp = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const createUser = async (email, password) => {
        const res = await axios.post('http://localhost:8080/signup', {
            email: email,
            password: password
        });
        alert(res.data.message)
        router.push('/login')
    }
    return (
        <div>
            <h1>Sing up</h1>
            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            <button onClick={() => createUser(email, password)}>Sign up</button>
        </div>
    )
}

export default SignUp