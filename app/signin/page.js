'use client'

import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useState } from "react"

export default function SignIn() {
  const [username, setUser] = useState('')
  const [password, setPass] = useState('')

  const { data: session, status } = useSession()

  const handleSubmit = async e => {
    e.preventDefault()
    
    const res = await signIn('credentials', {
      username,
      password,
      redirect: false,
    })
    console.log(res)
  }

  if (session) {
    redirect('/dashboard')
  }

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={e => setUser(e.target.value)} required />
      <input type="password" onChange={e => setPass(e.target.value)} required />
      <input type="submit" value='Sign in' />
    </form>
  )
}