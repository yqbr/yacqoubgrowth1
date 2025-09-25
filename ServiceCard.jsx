export default function ServiceCard({ title, desc, price }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-gray-600">{desc}</p>
      <p className="mt-4 font-bold text-indigo-600">{price}</p>
    </div>
  )
}
