'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { redirect } from "next/navigation"
import Link from "next/link"

export default function Button() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  if (session) {
    console.log(session)
    return (
      <>
        Signed in as {session?.user.username} <br />
        <button onClick={e => {
          e.preventDefault()
          signOut()
        }}>Sign out</button>
      </>
    )
  } else {
    // redirect('/protected/client')
  }

  return (
    <>
      Not signed in <br />
      <button onClick={e => {
        e.preventDefault()
        signIn()
      }}>Sign in</button>
    </>
  )
}