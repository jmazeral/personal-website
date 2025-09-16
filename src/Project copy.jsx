export default function Experience({ title, company, time, description }) {
    return (
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-1">{title}</h2>
            <h3 className="text-lg mb-1">{company}</h3>
            <h4 className="text-sm mb-2">{time}</h4>
            <p className="">{description}</p>
        </div>
    )
}