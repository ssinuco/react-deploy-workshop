import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../services/APIClient';
import './login.css';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();  
        getToken(email, password)
        .then(
            ()=>{
                navigate(`/products`);
            }
        );
      };
 
    return (
    <main className="container">
        <article className="grid">
            <div>
                <hgroup>
                    <h1>Sign in</h1>
                    <h2>Burger Queen</h2>
                </hgroup>
            </div>
            <form onSubmit={handleLogin}>
                <input type="text" name="login" value={email} onChange={e => setEmail(e.target.value)} placeholder="Login" aria-label="Login" autocomplete="nickname" required />
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" aria-label="Password" autocomplete="current-password" required />
                <button type="submit" className="contrast" >Login</button>
            </form>
        </article>      
    </main>    
    );
}

export default Login;