export default function ContactRow({ label, value, link }) {
  return (
    <div className="mt-3">
      <strong>{label}:</strong>{" "}
      {link ? <a href={link} className="text-indigo-600 hover:underline">{value}</a> : value}
    </div>
  )
}
