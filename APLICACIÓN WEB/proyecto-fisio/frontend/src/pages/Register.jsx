import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/Register.css'

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.endsWith('@tecsup.edu.pe')) {
      setError('El correo debe ser @tecsup.edu.pe')
      return
    }
    setError('')

    const res = await fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    })

    if (res.ok) {
      alert('Registro exitoso, por favor inicia sesión')
      navigate('/login')
    } else {
      const data = await res.json()
      setError(JSON.stringify(data))
    }
  }

  return (
    <div className="register-container">
      <div className="register-content">
        <h2 className="register-title">Registro</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            placeholder="Nombre de usuario"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            placeholder="Correo @tecsup.edu.pe"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            required
          />
          <input
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            required
          />
          <button type="submit" className="register-button">Registrarse</button>
        </form>
        {error && <p className="register-error">{error}</p>}
        <p className="register-footer">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  )
}
