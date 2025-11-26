import { creditsData } from '../data/creditsData'
import { CreditCard } from '../components/CreditCard'

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Nuestros Créditos</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {creditsData.map((credit) => (
          <CreditCard key={credit.id} credit={credit} />
        ))}
      </div>
    </div>
  )
}