import { useState } from 'react'
import { creditsData } from '../data/creditsData'
import { CreditCard } from '../components/CreditCard'

export default function Simulator() {
  const [searchTerm, setSearchTerm] = useState('')
  const [minRate, setMinRate] = useState(0)
  const [maxRate, setMaxRate] = useState(15)

  // Filtrar créditos según búsqueda y tasas
  const filtered = creditsData.filter((credit) => {
    const matchesSearch = credit.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRate = credit.interestRate >= minRate && credit.interestRate <= maxRate
    return matchesSearch && matchesRate
  })

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simulador de Créditos</h1>

      {/* Búsqueda */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Buscar crédito..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "10px", width: "100%", fontSize: "16px" }}
        />
      </div>

      {/* Filtro de tasas */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "20px" }}>
        <div>
          <label>Tasa mínima: {minRate}%</label>
          <input
            type="range"
            min="0"
            max="15"
            value={minRate}
            onChange={(e) => setMinRate(Number(e.target.value))}
            style={{ width: "200px" }}
          />
        </div>
        <div>
          <label>Tasa máxima: {maxRate}%</label>
          <input
            type="range"
            min="0"
            max="15"
            value={maxRate}
            onChange={(e) => setMaxRate(Number(e.target.value))}
            style={{ width: "200px" }}
          />
        </div>
      </div>

      {/* Resultados */}
      {filtered.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {filtered.map((credit) => (
            <CreditCard key={credit.id} credit={credit} />
          ))}
        </div>
      ) : (
        <p style={{ fontSize: "18px", color: "red" }}>No hay créditos disponibles con esos filtros</p>
      )}
    </div>
  )
}