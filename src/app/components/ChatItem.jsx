export function ChatItem({ name, message }) {
    return (
        <div className="flex items-center p-4 hover:bg-gray-100 cursor-pointer border-b">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">{name[0]}</div>
            <div className="ml-4">
                <h3 className="font-semibold text-black">{name}</h3>
                <p className="text-sm text-gray-500">{message}</p>
            </div>
        </div>
    )
}