import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#0066cc", padding: "15px", display: "flex", gap: "20px" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
        Home
      </Link>
      <Link to="/simulator" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
        Simulador
      </Link>
      <Link to="/request" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
        Solicitar
      </Link>
    </nav>
  )
}