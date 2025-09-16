export default function Project({ title, description, link }) {
    return (
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="mb-4">{description}</p>
            {link && <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Learn More</a>}
        </div>
    )
}