import { Link } from 'react-router-dom'
import '../styles/Welcome.css'

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Fisio Plus Rafael</h1>

        <Link to="/register" className="welcome-button">
          Empezar
        </Link>

        <p className="welcome-text">
          Ya tengo una cuenta {' '}
          <Link to="/login">Iniciar sesión</Link>
        </p>
      </div>
    </div>
  )
}
