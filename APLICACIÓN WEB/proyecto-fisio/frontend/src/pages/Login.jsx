import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/Login.css' // Asegúrate de que contiene el diseño estilizado

export default function Login() {
  const [username, setUsername] = useState('')  // Cambio aquí
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })  // Ahora sí es username
    })

    if (res.ok) {
      const data = await res.json()
      localStorage.setItem('token', data.access)
      navigate('/home')
    } else {
      setError('Usuario o contraseña incorrectos')
    }
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Iniciar sesión</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">Entrar</button>
        </form>

        {error && <p className="login-error">{error}</p>}

        <p className="login-footer">
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </div>
    </div>
  )
}
