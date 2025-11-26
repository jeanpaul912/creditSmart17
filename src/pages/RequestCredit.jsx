import { useState } from 'react'
import { creditsData } from '../data/creditsData'

export default function RequestCredit() {
  const [formData, setFormData] = useState({
    creditType: '',
    amount: '',
    term: '',
    fullName: '',
    email: '',
    phone: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [applications, setApplications] = useState([])
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Calcular cuota mensual si cambia monto o plazo
    if (name === 'amount' || name === 'term' || name === 'creditType') {
      calculatePayment(name, value)
    }
  }

  // Calcular la cuota mensual
  const calculatePayment = (fieldName, fieldValue) => {
    let amount = fieldName === 'amount' ? Number(fieldValue) : Number(formData.amount)
    let term = fieldName === 'term' ? Number(fieldValue) : Number(formData.term)
    let creditId = fieldName === 'creditType' ? fieldValue : formData.creditType

    const credit = creditsData.find(c => c.id === Number(creditId))
    if (!credit || !amount || !term) return

    const monthlyRate = credit.interestRate / 100 / 12
    const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)
    setMonthlyPayment(Math.round(payment * 100) / 100)
  }

  // Validar formulario
  const validateForm = () => {
    if (!formData.creditType || !formData.amount || !formData.term || !formData.fullName || !formData.email || !formData.phone) {
      alert('Por favor completa todos los campos')
      return false
    }
    const amount = Number(formData.amount)
    const credit = creditsData.find(c => c.id === Number(formData.creditType))
    if (amount < credit.minAmount || amount > credit.maxAmount) {
      alert(`El monto debe estar entre $${credit.minAmount} y $${credit.maxAmount}`)
      return false
    }
    return true
  }

  // Enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    const newApplication = {
      id: Date.now(),
      ...formData,
      monthlyPayment,
      date: new Date().toLocaleDateString()
    }

    setApplications([...applications, newApplication])
    setSubmitted(true)

    // Limpiar formulario
    setTimeout(() => {
      setFormData({
        creditType: '',
        amount: '',
        term: '',
        fullName: '',
        email: '',
        phone: ''
      })
      setMonthlyPayment(0)
      setSubmitted(false)
    }, 2000)
  }

  const selectedCredit = creditsData.find(c => c.id === Number(formData.creditType))

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Solicitar Crédito</h1>

      {submitted && (
        <div style={{ backgroundColor: "#4CAF50", color: "white", padding: "15px", marginBottom: "20px", borderRadius: "5px" }}>
          ✓ ¡Solicitud enviada exitosamente!
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ backgroundColor: "#f5f5f5", padding: "20px", borderRadius: "8px" }}>
        
        {/* Tipo de crédito */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Tipo de Crédito</label>
          <select
            name="creditType"
            value={formData.creditType}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
          >
            <option value="">Selecciona un crédito</option>
            {creditsData.map((credit) => (
              <option key={credit.id} value={credit.id}>
                {credit.name}
              </option>
            ))}
          </select>
        </div>

        {/* Monto */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
            Monto: ${formData.amount || 0}
            {selectedCredit && ` (Min: $${selectedCredit.minAmount}, Max: $${selectedCredit.maxAmount})`}
          </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Ingresa el monto"
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
          />
        </div>

        {/* Plazo */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
            Plazo: {formData.term} meses
            {selectedCredit && ` (Min: ${selectedCredit.minTerm}, Max: ${selectedCredit.maxTerm})`}
          </label>
          <input
            type="number"
            name="term"
            value={formData.term}
            onChange={handleChange}
            placeholder="Meses"
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
          />
        </div>

        {/* Resumen de cuota */}
        {monthlyPayment > 0 && (
          <div style={{ backgroundColor: "#e3f2fd", padding: "15px", marginBottom: "15px", borderRadius: "5px" }}>
            <p><strong>Cuota Mensual Estimada: ${monthlyPayment}</strong></p>
          </div>
        )}

        {/* Datos personales */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Nombre Completo</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Tu nombre"
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Tu teléfono"
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
          />
        </div>

        {/* Botón enviar */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            backgroundColor: "#0066cc",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Enviar Solicitud
        </button>
      </form>

      {/* Historial de solicitudes */}
      {applications.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h2>Solicitudes Enviadas ({applications.length})</h2>
          {applications.map((app) => (
            <div key={app.id} style={{ backgroundColor: "#f9f9f9", padding: "15px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ddd" }}>
              <p><strong>Crédito:</strong> {creditsData.find(c => c.id === Number(app.creditType))?.name}</p>
              <p><strong>Monto:</strong> ${app.amount}</p>
              <p><strong>Plazo:</strong> {app.term} meses</p>
              <p><strong>Cuota Mensual:</strong> ${app.monthlyPayment}</p>
              <p><strong>Solicitante:</strong> {app.fullName}</p>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>Fecha:</strong> {app.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}