export default function Icon({ icon, name, onClick }) {
    return (
        <div className="w-30 text-center cursor-pointer select-none hover:bg-blue-100 p-1 rounded" onClick={onClick}>
            <img src={icon} alt={name} className="mx-auto mb-1" />
            <div className="text-s">{name}</div>
        </div>
    )
}