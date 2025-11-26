export function CreditCard({ credit }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px" }}>
      <h3>{credit.icon} {credit.name}</h3>
      <p>{credit.description}</p>
      <p><strong>Tasa:</strong> {credit.interestRate}%</p>
      <p><strong>Monto:</strong> ${credit.minAmount} - ${credit.maxAmount}</p>
      <p><strong>Plazo:</strong> {credit.minTerm} - {credit.maxTerm} meses</p>
    </div>
  );
}