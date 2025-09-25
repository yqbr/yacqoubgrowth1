export default function PriceCard({ name, bullets, price, featured }) {
  return (
    <div className={`p-6 rounded-lg shadow ${featured ? 'bg-indigo-50 border-2 border-indigo-600' : 'bg-white'}`}>
      <h4 className="font-semibold">{name}</h4>
      <ul className="mt-3 space-y-2">
        {bullets.map((b, i) => <li key={i} className="text-gray-700">• {b}</li>)}
      </ul>
      <p className="mt-4 font-bold text-indigo-600">{price}</p>
    </div>
  )
}
