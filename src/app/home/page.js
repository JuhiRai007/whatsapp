'use client'
import { ChatItem } from '../components/ChatItem'


export default function Home() {
    const chats = [
        { name: 'Rahul', message: 'Hey there!' },
        { name: 'Amit', message: 'How are you?' },
        { name: 'Priya', message: 'Let’s meet tomorrow' }
    ]


    return (
        <div className="flex h-screen">
            <aside className="w-1/4 bg-white border-r">
                <h2 className="p-4 text-xl font-bold text-green-600">WhatsApp</h2>
                {chats.map((chat, i) => (
                    <ChatItem key={i} {...chat} />
                ))}
            </aside>
            <main className="flex-1 flex items-center justify-center text-gray-500">
                Select a chat to start messaging
            </main>
        </div>
    )
}