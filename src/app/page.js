'use client'
import Link from 'next/link'
import { Input } from './components/Input'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
    const [loading, setLoading] = useState(false)


  const router = useRouter();
  const handleLogin = async () => {
    setLoading(true)
    try {
      const res = await fetch("https://chat-app-production-5e41.up.railway.app/user/log-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phone.toString(),
          otp,
        })
      })
      const data = await res.json();
      if (!res.ok) throw new Error("faild to login user")

      console.log("success", data)
      router.push("/home")

      setPhone("");
      setOtp("");

    } catch (err) {
      console.error(err);
      alert(err.message)
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-96 space-y-2">
        <h1 className="text-2xl font-bold text-center mb-6 text-green-600"> Login</h1>
        <Input placeholder="Enter Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <Input placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
        <button onClick={handleLogin} disabled={loading} className="w-full mt-4 bg-green-600 text-white p-3 rounded-lg">{loading ? "Verifying..." : "Login"}</button>
        <p className="text-sm text-center mt-4 text-gray-400">
          Don’t have an account? <Link href="/signup" className="text-green-600">Sign up</Link>
        </p>
      </div>
    </div>
  )
}