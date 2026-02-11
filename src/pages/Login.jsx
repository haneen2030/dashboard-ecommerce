import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login ({setIsLoggedIn}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
    e.preventDefault()

    if(email==="admin@hashplus.com" && password==="123456"){
    setIsLoggedIn(true);
    navigate("/dashbored")
    }else {
        setError("Error input!")
    }


    }
    return(
        <div className="login-page">
            <div className="login-card">
                <h2>Login Page</h2>
                <form onSubmit={handleLogin} >
                    {error && <p className="error-message">{error}</p>}
                    <div className="form-group">
                        <label> Email </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label> Password </label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                    </div>
                    <button type="submit" className="login-btn">Login</button>

                </form>
            </div>
        </div>
    )
}

export default Login;