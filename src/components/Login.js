import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import he from 'he';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Sanitize input
        const sanitizedUsername = he.encode(username);
        const sanitizedPassword = he.encode(password);

        // Validation regex: only English letters, dot, and @
        const usernameRegex = /^[a-zA-Z@.]+$/;

        if (!sanitizedUsername || !sanitizedPassword) {
            setError('All fields are required');
            return;
        }

        if (!usernameRegex.test(sanitizedUsername)) {
            setError('Username can only contain English letters, dot, and @');
            return;
        }

        // Add authentication logic here
        setError('');

        // Navigate to home page after successful login
        navigate('/');
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;
